import { createLazyAnimatedIcon } from "./lazy.tsx";
import { type AnimatedIconName, animatedIconLoaders } from "./loaders.ts";
import type { AnimatedIconComponent } from "./types.ts";

export { type AnimatedIconName, animatedIconLoaders, createLazyAnimatedIcon };

const lazyIcons = new Map<string, AnimatedIconComponent>();

export const getLazyAnimatedIcon = (name: AnimatedIconName, Fallback: AnimatedIconComponent) => {
	let lazy = lazyIcons.get(name);
	if (!lazy) {
		lazy = createLazyAnimatedIcon(name, animatedIconLoaders[name], Fallback);
		lazyIcons.set(name, lazy);
	}
	return lazy;
};
