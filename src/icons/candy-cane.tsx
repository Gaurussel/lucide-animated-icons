import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const hook = pose(
	{ rotate: [0, -6, 14.4, 0], y: [0, 0.6, -1.2, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.38, 1], ease: [snap, "easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "candy-cane",
	render: (part) => (
		<motion.g {...part(hook)} style={pivot(4, 21)}>
			<path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
			<motion.path {...part(redraw(0.4, 0.22))} d="M17.75 7 15 2.1" />
			<motion.path {...part(redraw(0.33, 0.22))} d="M10.9 4.8 13 9" />
			<motion.path {...part(redraw(0.26, 0.22))} d="m7.9 9.7 2 4.4" />
			<motion.path {...part(redraw(0.19, 0.22))} d="M4.9 14.7 7 18.9" />
		</motion.g>
	),
});
