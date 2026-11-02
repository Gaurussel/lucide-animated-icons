import { forwardRef, useEffect, useState } from "react";
import { type AnimatedIconName, animatedIconLoaders } from "./loaders.ts";
import { useAnimatedIconHub } from "./trigger.ts";
import type { AnimatedIconComponent, AnimatedIconLoader, AnimatedIconProps } from "./types.ts";

export { type AnimatedIconName, animatedIconLoaders };

const loaded = new Map<string, AnimatedIconComponent>();
const pending = new Map<string, Promise<AnimatedIconComponent>>();
const lazyIcons = new Map<string, AnimatedIconComponent>();

const loadOnce = (name: string, load: AnimatedIconLoader) => {
	let request = pending.get(name);
	if (!request) {
		request = load().then((module) => {
			loaded.set(name, module.default);
			return module.default;
		});
		request.catch(() => pending.delete(name));
		pending.set(name, request);
	}
	return request;
};

export const createLazyAnimatedIcon = (name: string, load: AnimatedIconLoader, Fallback: AnimatedIconComponent) => {
	const LazyAnimatedIcon = forwardRef<SVGSVGElement, AnimatedIconProps>(({ style, ...svgProps }, ref) => {
		const hub = useAnimatedIconHub();
		const [Animated, setAnimated] = useState<AnimatedIconComponent | null>(() => loaded.get(name) ?? null);

		useEffect(() => {
			if (Animated || !hub) return;
			let active = true;
			const request = () => {
				loadOnce(name, load).then((component) => {
					if (active) setAnimated(() => component);
				});
			};
			if (hub.getState() !== "rest") {
				request();
				return () => {
					active = false;
				};
			}
			const unsubscribe = hub.subscribe((state) => {
				if (state === "rest") return;
				unsubscribe();
				request();
			});
			return () => {
				active = false;
				unsubscribe();
			};
		}, [Animated, hub]);

		const Icon = Animated ?? Fallback;
		return <Icon {...svgProps} ref={ref} style={{ pointerEvents: "none", ...style }} />;
	});
	LazyAnimatedIcon.displayName = `LazyAnimatedIcon(${name})`;
	return LazyAnimatedIcon;
};

export const getLazyAnimatedIcon = (name: AnimatedIconName, Fallback: AnimatedIconComponent) => {
	let lazy = lazyIcons.get(name);
	if (!lazy) {
		lazy = createLazyAnimatedIcon(name, animatedIconLoaders[name], Fallback);
		lazyIcons.set(name, lazy);
	}
	return lazy;
};
