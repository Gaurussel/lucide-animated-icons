import { forwardRef, useEffect, useState } from "react";
import { useAnimatedIconHub } from "./trigger.ts";
import type { AnimatedIconComponent, AnimatedIconLoader, AnimatedIconProps } from "./types.ts";

const loaded = new Map<string, AnimatedIconComponent>();
const pending = new Map<string, Promise<AnimatedIconComponent>>();

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
