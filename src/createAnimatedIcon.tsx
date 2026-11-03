import { type MotionProps, useAnimationControls, useReducedMotion, type Variants } from "motion/react";
import { forwardRef, type ReactNode, type SVGProps, useEffect } from "react";
import { cx } from "./cx.ts";
import { initialTarget, startFromCurrent, toTransformVariants } from "./toTransformVariants.ts";
import { type AnimatedIconHub, type AnimatedIconState, useAnimatedIconHub } from "./trigger.ts";
import type { AnimatedIconProps } from "./types.ts";

export type PartMotion = (variants: Variants) => MotionProps;

export type AnimatedIconSvg = Pick<
	SVGProps<SVGSVGElement>,
	| "className"
	| "fill"
	| "height"
	| "stroke"
	| "strokeLinecap"
	| "strokeLinejoin"
	| "strokeWidth"
	| "viewBox"
	| "width"
>;

export interface AnimatedIconDef {
	name: string;
	render: (part: PartMotion) => ReactNode;
	svg?: AnimatedIconSvg;
}

const staticPart: PartMotion = () => ({});

export const createAnimatedIcon = ({ name, render, svg }: AnimatedIconDef) => {
	const attributes: AnimatedIconSvg = {
		className: `lucide lucide-${name}`,
		fill: "none",
		height: "24",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "2",
		viewBox: "0 0 24 24",
		width: "24",
		...svg,
	};

	const Svg = forwardRef<SVGSVGElement, AnimatedIconProps & { part: PartMotion; live?: boolean }>(
		({ className, height, live, part, strokeWidth, style, viewBox, width }, ref) => (
			<svg
				{...attributes}
				aria-hidden="true"
				className={cx(attributes.className, className)}
				data-animated-icon={live ? "live" : undefined}
				height={height ?? attributes.height}
				ref={ref}
				strokeWidth={strokeWidth ?? attributes.strokeWidth}
				style={live ? { overflow: "visible", ...style } : style}
				viewBox={viewBox ?? attributes.viewBox}
				width={width ?? attributes.width}
				xmlns="http://www.w3.org/2000/svg"
			>
				{render(part)}
			</svg>
		),
	);

	const LiveIcon = forwardRef<SVGSVGElement, AnimatedIconProps & { hub: AnimatedIconHub }>(
		({ hub, ...svgProps }, ref) => {
			const controls = useAnimationControls();

			useEffect(() => {
				let playing: AnimatedIconState | null = null;
				let wanted = hub.getState();
				const play = (state: AnimatedIconState) => {
					playing = state;
					void controls.start(state).then(() => {
						if (playing !== state) return;
						playing = null;
						if (wanted !== state) play(wanted);
					});
				};
				if (wanted !== "rest") play(wanted);
				return hub.subscribe((state) => {
					wanted = state;
					if (playing === "active" && state !== "open") return;
					play(state);
				});
			}, [hub, controls]);

			const part: PartMotion = (variants) => {
				const converted = startFromCurrent(toTransformVariants(variants));
				return {
					variants: { open: converted.active, ...converted },
					initial: initialTarget(converted),
					animate: controls,
				};
			};

			return <Svg {...svgProps} live part={part} ref={ref} />;
		},
	);

	const AnimatedIcon = forwardRef<SVGSVGElement, AnimatedIconProps>((props, ref) => {
		const hub = useAnimatedIconHub();
		const reducedMotion = useReducedMotion();
		if (!hub || reducedMotion) return <Svg {...props} part={staticPart} ref={ref} />;
		return <LiveIcon {...props} hub={hub} ref={ref} />;
	});
	AnimatedIcon.displayName = `AnimatedIcon(${name})`;

	return AnimatedIcon;
};
