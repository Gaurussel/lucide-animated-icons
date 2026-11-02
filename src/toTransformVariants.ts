import type { Target, TargetAndTransition, Variants } from "motion/react";

type Bag = Record<string, unknown>;

const ORDER = ["x", "y", "translateX", "translateY", "scale", "scaleX", "scaleY", "rotate", "skewX", "skewY"] as const;
type TransformKey = (typeof ORDER)[number];

const RESERVED = new Set(["transition", "transitionEnd"]);

const isBag = (value: unknown): value is Bag => typeof value === "object" && value !== null && !Array.isArray(value);

const neutral = (key: string) => (key.startsWith("scale") ? 1 : 0);

const fn = (key: TransformKey, value: number) => {
	if (key === "x" || key === "translateX") return `translateX(${value}px)`;
	if (key === "y" || key === "translateY") return `translateY(${value}px)`;
	if (key === "rotate") return `rotate(${value}deg)`;
	if (key === "skewX" || key === "skewY") return `${key}(${value}deg)`;
	return `${key}(${value})`;
};

const isNumbers = (value: unknown) =>
	typeof value === "number" || (Array.isArray(value) && value.every((item) => typeof item === "number"));

const lastNumber = (value: unknown) => (Array.isArray(value) ? value[value.length - 1] : value);

const compose = (keys: TransformKey[], at: (key: TransformKey) => number) =>
	keys.map((key) => fn(key, at(key))).join(" ");

export const toTransformVariants = (variants: Variants): Variants => {
	const entries = Object.entries(variants);
	if (entries.some(([, variant]) => !isBag(variant))) return variants;
	const bags = entries as [string, Bag][];

	const used = new Set<string>();
	for (const [, bag] of bags) {
		for (const key of Object.keys(bag)) if (!RESERVED.has(key)) used.add(key);
		if (isBag(bag.transitionEnd)) for (const key of Object.keys(bag.transitionEnd)) used.add(key);
	}
	const keys = ORDER.filter((key) => used.has(key));
	if (keys.length === 0) return variants;

	const rest = isBag(variants.rest) ? variants.rest : {};
	const restFinal = (key: TransformKey) => {
		const value = lastNumber(rest[key]);
		return typeof value === "number" ? value : neutral(key);
	};

	const converted: Variants = {};
	for (const [name, bag] of bags) {
		const { transition, transitionEnd, ...values } = bag;
		const ends = isBag(transitionEnd) ? transitionEnd : {};

		if (!keys.every((key) => [values[key], ends[key]].every((value) => value === undefined || isNumbers(value))))
			return variants;

		const lengths = new Set<number>();
		for (const key of keys) if (Array.isArray(values[key])) lengths.add((values[key] as number[]).length);
		if (lengths.size > 1) return variants;
		const [length] = lengths;

		const at = (index: number) => (key: TransformKey) => {
			const value = values[key];
			if (Array.isArray(value)) return value[index] as number;
			return typeof value === "number" ? value : restFinal(key);
		};

		const next: Bag = {};
		for (const [key, value] of Object.entries(values)) if (!keys.includes(key as TransformKey)) next[key] = value;
		next.transform =
			length === undefined ? compose(keys, at(0)) : Array.from({ length }, (_, i) => compose(keys, at(i)));

		if (isBag(transition)) {
			const shared = { ...transition };
			const primary = keys.find((key) => isBag(transition[key]));
			for (const key of keys) delete shared[key];
			next.transition = primary ? { ...shared, transform: transition[primary] } : shared;
		} else if (transition !== undefined) next.transition = transition;

		const endBag: Bag = {};
		for (const [key, value] of Object.entries(ends)) if (!keys.includes(key as TransformKey)) endBag[key] = value;
		if (keys.some((key) => ends[key] !== undefined))
			endBag.transform = compose(keys, (key) =>
				typeof ends[key] === "number" ? (ends[key] as number) : restFinal(key),
			);
		if (Object.keys(endBag).length) next.transitionEnd = endBag;

		converted[name] = next as TargetAndTransition;
	}
	return converted;
};

export const startFromCurrent = (variants: Variants): Variants => {
	const rest = variants.rest;
	if (!isBag(rest)) return variants;
	return Object.fromEntries(
		Object.entries(variants).map(([name, variant]) => {
			if (name === "rest" || !isBag(variant)) return [name, variant];
			const next: Bag = { ...variant };
			for (const [key, value] of Object.entries(variant)) {
				if (RESERVED.has(key) || !Array.isArray(value)) continue;
				if (value[0] === lastNumber(rest[key])) next[key] = [null, ...value.slice(1)];
			}
			return [name, next];
		}),
	) as Variants;
};

export const initialTarget = (variants: Variants): Target => {
	const rest = variants.rest;
	if (!isBag(rest)) return {};
	const target: Bag = {};
	for (const [key, value] of Object.entries(rest)) if (!RESERVED.has(key)) target[key] = lastNumber(value);
	return target as Target;
};
