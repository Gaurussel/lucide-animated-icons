import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type AnimatedIconProps = Pick<
	SVGProps<SVGSVGElement>,
	"className" | "height" | "strokeWidth" | "style" | "viewBox" | "width"
>;

export type AnimatedIconComponent = ForwardRefExoticComponent<AnimatedIconProps & RefAttributes<SVGSVGElement>>;

export type AnimatedIconLoader = () => Promise<{ default: AnimatedIconComponent }>;
