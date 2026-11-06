import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const ignite = pose(
	{ scale: [1, 0.82, 1.12, 1], rotate: [0, 0, -7.2, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "flame",
	render: (part) => (
		<motion.g {...part(ignite)} style={pivot(12, 22)}>
			<motion.path
				{...part(redraw(0.05, 0.4))}
				d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
			/>
		</motion.g>
	),
});
