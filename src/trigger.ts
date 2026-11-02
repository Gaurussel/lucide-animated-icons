import { createContext, useContext } from "react";

export type AnimatedIconState = "rest" | "active" | "open";

export interface AnimatedIconHub {
	subscribe: (listener: (state: AnimatedIconState) => void) => () => void;
	getState: () => AnimatedIconState;
	emit: (state: AnimatedIconState) => void;
}

export const createAnimatedIconHub = (): AnimatedIconHub => {
	const listeners = new Set<(state: AnimatedIconState) => void>();
	let current: AnimatedIconState = "rest";
	return {
		getState: () => current,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => {
				listeners.delete(listener);
			};
		},
		emit: (state) => {
			if (state === current) return;
			current = state;
			for (const listener of listeners) listener(state);
		},
	};
};

export const AnimatedIconTriggerContext = createContext<AnimatedIconHub | null>(null);

export const useAnimatedIconHub = () => useContext(AnimatedIconTriggerContext);
