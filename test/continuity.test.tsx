import { render } from "@testing-library/react";
import type { Variants } from "motion/react";
import { describe, expect, test, vi } from "vitest";
import * as transform from "../src/toTransformVariants.ts";
import { AnimatedIconTriggerContext, createAnimatedIconHub } from "../src/trigger.ts";
import { iconModules } from "./icons.ts";

vi.mock("../src/toTransformVariants.ts", async (importOriginal) => {
	const actual = await importOriginal<typeof transform>();
	return { ...actual, toTransformVariants: vi.fn(actual.toTransformVariants) };
});

const toTransformSpy = vi.mocked(transform.toTransformVariants);

type Bag = Record<string, unknown>;

const RESERVED = new Set(["transition", "transitionEnd"]);
const ABRUPT_EASES = new Set(["linear", "easeOut", "circOut", "backOut"]);

const isBag = (value: unknown): value is Bag => typeof value === "object" && value !== null && !Array.isArray(value);
const neutral = (key: string) => (key.startsWith("scale") || key === "opacity" || key === "pathLength" ? 1 : 0);
const last = (value: unknown) => (Array.isArray(value) ? value[value.length - 1] : value);

const sameVisual = (key: string, a: unknown, b: unknown) =>
	a === b || (key === "rotate" && typeof a === "number" && typeof b === "number" && (a - b) % 360 === 0);

const firstEase = (transition: unknown, key: string) => {
	if (!isBag(transition)) return undefined;
	const own = isBag(transition[key]) ? (transition[key] as Bag) : transition;
	if (own.type === "spring") return undefined;
	return Array.isArray(own.ease) ? own.ease[0] : own.ease;
};

const discontinuities = (variants: Variants) => {
	const rest = isBag(variants.rest) ? variants.rest : {};
	const found: string[] = [];
	for (const [name, variant] of Object.entries(variants)) {
		if (name === "rest" || !isBag(variant)) continue;
		const ends = isBag(variant.transitionEnd) ? variant.transitionEnd : {};
		for (const [key, value] of Object.entries(variant)) {
			if (RESERVED.has(key)) continue;
			const restValue = last(rest[key]) ?? neutral(key);
			const end = key in ends ? ends[key] : undefined;
			if (Array.isArray(value)) {
				if (value[0] !== null && value[0] !== restValue)
					found.push(`${name}.${key} starts at ${value[0]}, rest is ${restValue}`);
				const settled = end ?? last(value);
				if (!sameVisual(key, last(value), restValue) || !sameVisual(key, settled, restValue))
					found.push(`${name}.${key} ends at ${last(value)}, rest is ${restValue}`);
				const ease = firstEase(variant.transition, key);
				if (typeof ease === "string" && ABRUPT_EASES.has(ease))
					found.push(`${name}.${key} leaves rest with ${ease}`);
			} else if (end !== undefined && !sameVisual(key, value, end)) {
				found.push(`${name}.${key} snaps from ${value} to ${end}`);
			}
		}
	}
	return found;
};

describe("animated icon continuity", () => {
	test.each(iconModules)("%s leaves and returns to rest smoothly", async (_, load) => {
		const { default: Animated } = await load();
		toTransformSpy.mockClear();
		render(
			<AnimatedIconTriggerContext.Provider value={createAnimatedIconHub()}>
				<Animated />
			</AnimatedIconTriggerContext.Provider>,
		);

		const found = toTransformSpy.mock.calls.flatMap(([variants]) => discontinuities(variants));
		expect(found).toEqual([]);
	});
});
