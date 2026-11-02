import { act, render, waitFor } from "@testing-library/react";
import { Check, Plus, X } from "lucide-react";
import type { ComponentType } from "react";
import { describe, expect, test, vi } from "vitest";
import { createLazyAnimatedIcon, getLazyAnimatedIcon } from "../src/dynamic.tsx";
import { type AnimatedIconHub, AnimatedIconTriggerContext, createAnimatedIconHub } from "../src/trigger.ts";

const isLive = (container: HTMLElement) => container.querySelector("svg")?.dataset.animatedIcon === "live";

const renderIn = (hub: AnimatedIconHub | null, Icon: ComponentType) =>
	render(
		<AnimatedIconTriggerContext.Provider value={hub}>
			<Icon />
		</AnimatedIconTriggerContext.Provider>,
	);

describe("lazy animated icon", () => {
	test("renders the fallback first, loads on the first non-rest state, then swaps and caches", async () => {
		const loader = vi.fn(() => import("../src/icons/plus.tsx"));
		const Icon = createLazyAnimatedIcon("lazy-plus", loader, Plus);
		const hub = createAnimatedIconHub();

		const first = renderIn(hub, Icon);
		expect(isLive(first.container)).toBe(false);
		expect(loader).not.toHaveBeenCalled();

		act(() => hub.emit("active"));
		await waitFor(() => expect(isLive(first.container)).toBe(true), { timeout: 5000 });
		expect(loader).toHaveBeenCalledTimes(1);

		const second = renderIn(createAnimatedIconHub(), Icon);
		expect(isLive(second.container)).toBe(true);
		expect(loader).toHaveBeenCalledTimes(1);
	});

	test("never loads without a trigger", async () => {
		const loader = vi.fn(() => import("../src/icons/x.tsx"));
		const Icon = createLazyAnimatedIcon("lazy-x", loader, X);

		const { container } = renderIn(null, Icon);
		await act(async () => undefined);

		expect(loader).not.toHaveBeenCalled();
		expect(container.querySelector("svg")).not.toBeNull();
	});

	test("loads at mount when the trigger is already active", async () => {
		const loader = vi.fn(() => import("../src/icons/check.tsx"));
		const Icon = createLazyAnimatedIcon("lazy-check", loader, Check);
		const hub = createAnimatedIconHub();
		hub.emit("open");

		renderIn(hub, Icon);

		await waitFor(() => expect(loader).toHaveBeenCalledTimes(1), { timeout: 5000 });
	});

	test("getLazyAnimatedIcon returns one component per name", () => {
		expect(getLazyAnimatedIcon("bell", Plus)).toBe(getLazyAnimatedIcon("bell", Plus));
	});
});
