import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, -4, 0], rotate: [0, -60, 360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "hexagon",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(12, 12)}>
			<motion.path
				{...part(redraw(0.05, 0.5))}
				d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
			/>
		</motion.g>
	),
});
