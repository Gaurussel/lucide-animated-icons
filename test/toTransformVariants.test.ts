import type { Variants } from "motion/react";
import { describe, expect, test } from "vitest";
import { initialTarget, startFromCurrent, toTransformVariants } from "../src/toTransformVariants.ts";

describe("toTransformVariants", () => {
	test("emits functions in Motion order from the union across variants", () => {
		const out = toTransformVariants({
			rest: { y: 0, rotate: 0 },
			active: { rotate: 90, x: 2 },
		});
		expect(out.rest).toEqual({ transform: "translateX(0px) translateY(0px) rotate(0deg)" });
		expect(out.active).toEqual({ transform: "translateX(2px) translateY(0px) rotate(90deg)" });
	});

	test("missing keys take rest value, neutral scale", () => {
		const out = toTransformVariants({ rest: { scaleX: 1.5 }, active: { y: 1 }, open: { scaleY: 2 } });
		expect(out.active).toEqual({ transform: "translateY(1px) scaleX(1.5) scaleY(1)" });
		expect(out.open).toEqual({ transform: "translateY(0px) scaleX(1.5) scaleY(2)" });
	});

	test("aligns keyframes and repeats singles", () => {
		const out = toTransformVariants({
			rest: { y: 0, scaleX: 1 },
			active: { y: [0, -3, 0], scaleX: 1.2 },
		});
		expect(out.active).toEqual({
			transform: ["translateY(0px) scaleX(1.2)", "translateY(-3px) scaleX(1.2)", "translateY(0px) scaleX(1.2)"],
		});
	});

	test("mismatched keyframe lengths leave variants untouched", () => {
		const variants: Variants = { rest: { y: 0 }, active: { y: [0, 1, 0], rotate: [0, 1] } };
		expect(toTransformVariants(variants)).toBe(variants);
	});

	test("maps per-key transition and transitionEnd", () => {
		const out = toTransformVariants({
			rest: { rotate: 0 },
			active: {
				rotate: 360,
				transitionEnd: { rotate: 0, opacity: 1 },
				transition: { duration: 0.4, rotate: { duration: 0.2 } },
			},
		});
		expect(out.active).toEqual({
			transform: "rotate(360deg)",
			transitionEnd: { opacity: 1, transform: "rotate(0deg)" },
			transition: { duration: 0.4, transform: { duration: 0.2 } },
		});
	});

	test("keeps non-transform keys and skips parts without transform keys", () => {
		const draw: Variants = { rest: { pathLength: 1 }, active: { pathLength: [0, 1] } };
		expect(toTransformVariants(draw)).toBe(draw);
		const out = toTransformVariants({ rest: { opacity: 1, y: 0 }, active: { opacity: 0.5, y: 2 } });
		expect(out.active).toEqual({ opacity: 0.5, transform: "translateY(2px)" });
	});

	test("string transform values are left alone", () => {
		const variants: Variants = { rest: { transform: "none" }, active: { transform: "rotate(90deg)" } };
		expect(toTransformVariants(variants)).toBe(variants);
	});

	test("does not mutate input", () => {
		const variants: Variants = { rest: { y: 0 }, active: { y: [0, -3, 0], transition: { y: { duration: 1 } } } };
		const snapshot = JSON.stringify(variants);
		toTransformVariants(variants);
		expect(JSON.stringify(variants)).toBe(snapshot);
	});

	test("initialTarget resolves rest to static final values", () => {
		const out = toTransformVariants({
			rest: { y: 0, opacity: 1, transition: { duration: 1 } },
			active: { y: [0, -3, 0] },
		});
		expect(initialTarget(out)).toEqual({ opacity: 1, transform: "translateY(0px)" });
	});

	test("startFromCurrent replaces a first keyframe equal to rest with the current value", () => {
		const out = startFromCurrent(
			toTransformVariants({
				rest: { y: 0, pathLength: 1 },
				active: { y: [0, -3, 0], pathLength: [1, 0, 1] },
				open: { y: [2, 0] },
			}),
		);
		expect(out.active).toEqual({
			pathLength: [null, 0, 1],
			transform: [null, "translateY(-3px)", "translateY(0px)"],
		});
		expect(out.open).toEqual({ transform: ["translateY(2px)", "translateY(0px)"] });
		expect(out.rest).toEqual({ pathLength: 1, transform: "translateY(0px)" });
	});
});
