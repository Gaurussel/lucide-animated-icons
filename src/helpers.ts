import type { Easing, TargetAndTransition, Transition, Variants } from "motion/react";

export const quick: Transition = { duration: 0.2, ease: "easeOut" };
export const centered = { originX: 0.5, originY: 0.5, transformBox: "fill-box" } as const;
export const edge = (originX: number, originY: number) => ({ originX, originY, transformBox: "fill-box" }) as const;
export const pivot = (x: number, y: number) =>
	({ originX: `${x}px`, originY: `${y}px`, transformBox: "view-box" }) as const;

interface PoseOptions {
	duration?: number;
	delay?: number;
	ease?: Easing | Easing[];
	times?: number[];
	reset?: boolean;
}

export const outAndBack: PoseOptions = { times: [0, 0.45, 1], ease: "easeInOut" };

const neutral = (key: string) => (key.startsWith("scale") || key === "opacity" || key === "pathLength" ? 1 : 0);

const restOf = (active: TargetAndTransition) =>
	Object.fromEntries(Object.keys(active).map((key) => [key, neutral(key)]));

export const pose = (
	active: TargetAndTransition,
	{ duration = 0.3, delay = 0, ease = "easeInOut", times, reset }: PoseOptions = {},
): Variants => ({
	rest: { ...restOf(active), transition: quick },
	active: {
		...active,
		...(reset ? { transitionEnd: restOf(active) } : {}),
		transition: { duration, delay, ease, ...(times ? { times } : {}) },
	},
});

export const slide = (x: number, y: number, options: PoseOptions = outAndBack) =>
	pose({ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) }, options);

export const pop = (delay = 0) => pose({ scale: [1, 1.3, 1] }, { duration: 0.3, delay, ease: "easeInOut" });

export const draw = (delay = 0, duration = 0.3) =>
	pose({ pathLength: [1, 0, 1] }, { duration: duration * 1.5, delay, times: [0, 0.35, 1] });

export const spin = (degrees: number) => pose({ rotate: degrees }, { duration: 0.4, ease: "easeInOut", reset: true });

export const wiggle = (degrees = 8) => pose({ rotate: [0, -degrees, degrees * 0.6, 0] }, { duration: 0.3 });
