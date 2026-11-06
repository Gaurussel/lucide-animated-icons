import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const speak = pose(
	{ scale: [1, 0.89, 1.09, 1], rotate: [0, 3.6, -6, 0] },
	{ duration: 0.7, times: [0, 0.14, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "message-square",
	render: (part) => (
		<motion.g {...part(speak)} style={pivot(3, 21)}>
			<motion.path
				{...part(redraw(0.14, 0.5))}
				d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
			/>
		</motion.g>
	),
});
