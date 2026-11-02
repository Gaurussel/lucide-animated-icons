import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const roll = pose(
	{ rotate: [0, -40, 0], x: [0, -2, 0] },
	{ duration: 0.72, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "shell",
	render: (part) => (
		<motion.g {...part(roll)} style={centered}>
			<motion.path
				{...part(redraw(0, 0.65))}
				d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
			/>
		</motion.g>
	),
});
