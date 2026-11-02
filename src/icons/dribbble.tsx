import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, -6, 0, -2, 0], rotate: [0, 140, 260, 310, 360] },
	{ duration: 0.75, times: [0, 0.25, 0.45, 0.6, 1], ease: [snap, "easeIn", "easeOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "dribbble",
	render: (part) => (
		<motion.g {...part(bounce)} style={pivot(12, 12)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(redraw(0.3, 0.35))} d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
			<motion.path {...part(redraw(0.36, 0.35))} d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
			<motion.path {...part(redraw(0.42, 0.3))} d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
		</motion.g>
	),
});
