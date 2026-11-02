import type { FocusEvent, FocusEventHandler, PointerEvent, PointerEventHandler } from "react";
import { useCallback, useRef } from "react";
import { type AnimatedIconHub, createAnimatedIconHub } from "./trigger.ts";

interface TriggerHandlers<E extends HTMLElement> {
	onPointerEnter?: PointerEventHandler<E>;
	onPointerLeave?: PointerEventHandler<E>;
	onFocus?: FocusEventHandler<E>;
	onBlur?: FocusEventHandler<E>;
}

interface UseAnimatedIconTriggerOptions<E extends HTMLElement> extends TriggerHandlers<E> {
	focus?: "visible" | "always";
}

const matchesFocusVisible = (element: HTMLElement) => {
	try {
		return element.matches(":focus-visible");
	} catch {
		return true;
	}
};

export const useAnimatedIconTrigger = <E extends HTMLElement>(options: UseAnimatedIconTriggerOptions<E> = {}) => {
	const { focus = "visible", onPointerEnter, onPointerLeave, onFocus, onBlur } = options;
	const hubRef = useRef<AnimatedIconHub>(null);
	hubRef.current ??= createAnimatedIconHub();
	const hub = hubRef.current;
	const flags = useRef({ hovered: false, focused: false, open: false });

	const sync = useCallback(() => {
		const { hovered, focused, open } = flags.current;
		hub.emit(open ? "open" : hovered || focused ? "active" : "rest");
	}, [hub]);

	const setOpen = useCallback(
		(open: boolean) => {
			flags.current.open = open;
			sync();
		},
		[sync],
	);

	const handlers = {
		onPointerEnter: (event: PointerEvent<E>) => {
			onPointerEnter?.(event);
			if (event.pointerType === "touch") return;
			flags.current.hovered = true;
			sync();
		},
		onPointerLeave: (event: PointerEvent<E>) => {
			onPointerLeave?.(event);
			flags.current.hovered = false;
			sync();
		},
		onFocus: (event: FocusEvent<E>) => {
			onFocus?.(event);
			if (focus === "visible" && !matchesFocusVisible(event.currentTarget)) return;
			flags.current.focused = true;
			sync();
		},
		onBlur: (event: FocusEvent<E>) => {
			onBlur?.(event);
			flags.current.focused = false;
			sync();
		},
	};

	return { hub, handlers, setOpen };
};
