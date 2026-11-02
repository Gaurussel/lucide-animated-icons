import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const measure = pose(
	{ x: [0, 1, -3, 0], y: [0, -1, 3, 0], rotate: [0, 4, -12, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "ruler",
	render: (part) => (
		<motion.g {...part(measure)} style={centered}>
			<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
			<motion.path {...part(redraw(0.3, 0.25))} d="m14.5 12.5 2-2" />
			<motion.path {...part(redraw(0.24, 0.25))} d="m11.5 9.5 2-2" />
			<motion.path {...part(redraw(0.18, 0.25))} d="m8.5 6.5 2-2" />
			<motion.path {...part(redraw(0.36, 0.25))} d="m17.5 15.5 2-2" />
		</motion.g>
	),
});
