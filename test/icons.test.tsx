import { render } from "@testing-library/react";
import * as lucide from "lucide-react";
import type { ComponentType } from "react";
import { describe, expect, test } from "vitest";
import * as animated from "../src/icons/index.ts";
import { animatedIconLoaders } from "../src/loaders.ts";
import { iconModules, toPascal } from "./icons.ts";

const GEOMETRY = ["d", "cx", "cy", "r", "x", "y", "x1", "x2", "y1", "y2", "width", "height", "rx", "ry", "points"];

const geometry = (container: HTMLElement) =>
	Array.from(container.querySelectorAll("path, circle, rect, line, polygon, polyline, ellipse"))
		.map((element) =>
			JSON.stringify([
				element.tagName,
				GEOMETRY.map((attribute) => [attribute, element.getAttribute(attribute)]).filter(([, value]) => value),
			]),
		)
		.sort();

const lucideIcons = lucide.icons as Record<string, ComponentType>;

describe("icon set", () => {
	test.each(iconModules)("%s keeps lucide geometry", async (name, load) => {
		const { default: Animated } = await load();
		const Lucide = lucideIcons[toPascal(name)];
		const own = render(<Animated />).container;
		const original = render(<Lucide />).container;

		expect(geometry(own)).toEqual(geometry(original));
		expect(own.querySelector("svg")?.getAttribute("viewBox")).toBe("0 0 24 24");
		expect(own.querySelector("svg")?.getAttribute("class")).toBe(`lucide lucide-${name}`);
	});

	test("every lucide icon is animated", () => {
		const missing = Object.keys(lucideIcons).filter((name) => !(name in animated));

		expect(missing).toEqual([]);
	});

	test("aliases load the canonical icon", async () => {
		const [filter, funnel] = await Promise.all([animatedIconLoaders.filter(), animatedIconLoaders.funnel()]);

		expect(filter.default).toBe(funnel.default);
		expect(animated.Filter).toBe(animated.Funnel);
	});
});
