import { act, render } from "@testing-library/react";
import { beforeAll, expect, test } from "vitest";
import Plus from "../src/icons/plus.tsx";
import { AnimatedIconTriggerContext, createAnimatedIconHub } from "../src/trigger.ts";

beforeAll(() => {
	window.matchMedia = (query: string) =>
		({
			matches: query.includes("prefers-reduced-motion"),
			media: query,
			addEventListener: () => undefined,
			removeEventListener: () => undefined,
			addListener: () => undefined,
			removeListener: () => undefined,
		}) as unknown as MediaQueryList;
});

test("with reduced motion the icon stays static inside an active trigger", () => {
	const hub = createAnimatedIconHub();
	const { container } = render(
		<AnimatedIconTriggerContext.Provider value={hub}>
			<Plus />
		</AnimatedIconTriggerContext.Provider>,
	);
	act(() => hub.emit("active"));

	expect(container.querySelector("svg")?.dataset.animatedIcon).toBeUndefined();
	expect(container.querySelector("svg")?.getAttribute("class")).toBe("lucide lucide-plus");
});
