import { render } from "@testing-library/react";
import type { MotionProps } from "motion/react";
import { describe, expect, test } from "vitest";
import { createAnimatedIcon } from "../src/createAnimatedIcon.tsx";
import { AnimatedIconTriggerContext, createAnimatedIconHub } from "../src/trigger.ts";

describe("createAnimatedIcon transform engine", () => {
	test("live part receives transform-based variants and a static initial", () => {
		let captured: MotionProps | undefined;
		const Icon = createAnimatedIcon({
			name: "probe",
			render: (part) => {
				captured = part({
					rest: { y: 0, rotate: 0, opacity: 1 },
					active: { y: [0, -3, 0], rotate: [0, 8, 0], opacity: 0.5 },
				});
				return <g />;
			},
		});

		render(
			<AnimatedIconTriggerContext.Provider value={createAnimatedIconHub()}>
				<Icon />
			</AnimatedIconTriggerContext.Provider>,
		);

		const variants = captured?.variants as Record<string, Record<string, unknown>>;
		expect(variants.active.transform).toEqual([
			null,
			"translateY(-3px) rotate(8deg)",
			"translateY(0px) rotate(0deg)",
		]);
		expect(variants.open.transform).toEqual(variants.active.transform);
		expect(variants.active.opacity).toBe(0.5);
		for (const name of ["rest", "active", "open"]) {
			expect(variants[name]).not.toHaveProperty("y");
			expect(variants[name]).not.toHaveProperty("rotate");
		}
		expect(captured?.initial).toEqual({ opacity: 1, transform: "translateY(0px) rotate(0deg)" });
	});
});
