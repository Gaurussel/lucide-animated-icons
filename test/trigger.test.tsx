import { act, fireEvent, render } from "@testing-library/react";
import { useEffect } from "react";
import { describe, expect, test, vi } from "vitest";
import Plus from "../src/icons/plus.tsx";
import { type AnimatedIconHub, type AnimatedIconState, AnimatedIconTriggerContext } from "../src/trigger.ts";
import { useAnimatedIconTrigger } from "../src/useAnimatedIconTrigger.ts";

const setup = (options: Parameters<typeof useAnimatedIconTrigger>[0] = {}) => {
	const states: AnimatedIconState[] = [];
	let setOpen: (open: boolean) => void = () => undefined;
	const Trigger = () => {
		const trigger = useAnimatedIconTrigger<HTMLButtonElement>(options);
		setOpen = trigger.setOpen;
		useEffect(() => trigger.hub.subscribe((state) => states.push(state)), [trigger.hub]);
		return <button {...trigger.handlers} type="button" />;
	};
	const { container } = render(<Trigger />);
	return {
		button: container.querySelector("button") as HTMLButtonElement,
		states,
		setOpen: (open: boolean) => act(() => setOpen(open)),
	};
};

describe("useAnimatedIconTrigger", () => {
	test("pointer and focus emit active and rest", () => {
		const { button, states } = setup();

		fireEvent.pointerEnter(button);
		fireEvent.pointerLeave(button);
		vi.spyOn(button, "matches").mockReturnValue(true);
		fireEvent.focus(button);
		fireEvent.blur(button);

		expect(states).toEqual(["active", "rest", "active", "rest"]);
	});

	test("focus without :focus-visible does not animate", () => {
		const { button, states } = setup();
		vi.spyOn(button, "matches").mockReturnValue(false);

		fireEvent.focus(button);

		expect(states).toEqual([]);
	});

	test("user handlers still run", () => {
		const onPointerEnter = vi.fn();
		const { button } = setup({ onPointerEnter });

		fireEvent.pointerEnter(button);

		expect(onPointerEnter).toHaveBeenCalledTimes(1);
	});

	test("open wins over leave and releases to rest", () => {
		const { button, states, setOpen } = setup();

		setOpen(true);
		fireEvent.pointerEnter(button);
		fireEvent.pointerLeave(button);
		setOpen(false);

		expect(states).toEqual(["open", "rest"]);
	});

	test("hub is stable across renders", () => {
		const hubs = new Set<AnimatedIconHub>();
		const Trigger = ({ tick }: { tick: number }) => {
			const { hub } = useAnimatedIconTrigger();
			hubs.add(hub);
			return <span>{tick}</span>;
		};
		const { rerender } = render(<Trigger tick={1} />);
		rerender(<Trigger tick={2} />);

		expect(hubs.size).toBe(1);
	});
});

describe("animated icon", () => {
	test("outside a trigger renders the static svg", () => {
		const { container } = render(<Plus />);

		expect(container.querySelector("svg")?.dataset.animatedIcon).toBeUndefined();
	});

	test("inside a trigger renders the live svg", () => {
		const Trigger = () => {
			const { hub } = useAnimatedIconTrigger();
			return (
				<AnimatedIconTriggerContext.Provider value={hub}>
					<Plus />
				</AnimatedIconTriggerContext.Provider>
			);
		};
		const { container } = render(<Trigger />);

		expect(container.querySelector("svg")?.dataset.animatedIcon).toBe("live");
	});
});
