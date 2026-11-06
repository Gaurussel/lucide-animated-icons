import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const fan = (degrees: number, delay: number) =>
	pose(
		{ rotate: [0, 5, degrees, 0] },
		{ duration: 0.62, delay, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, ring] },
	);
const dot = pose(
	{ scale: [1, 1, 2.2, 1] },
	{ duration: 0.55, delay: 0.15, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "swatch-book",
	render: (part) => (
		<>
			<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
			<motion.path
				{...part(fan(-14, 0.08))}
				d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"
				style={pivot(7, 17)}
			/>
			<motion.path {...part(dot)} d="M 7 17h.01" style={centered} />
			<motion.path
				{...part(fan(-30, 0))}
				d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
				style={pivot(7, 17)}
			/>
		</>
	),
});
