import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const scribble = pose(
	{ x: [0, -2, 2, -1, 0], y: [0, -1, 1, 0, 0], rotate: [0, -12, 8, -6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "pen",
	render: (part) => (
		<motion.g {...part(scribble)} style={pivot(3, 21)}>
			<motion.path
				{...part(redraw(0, 0.6))}
				d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
			/>
		</motion.g>
	),
});
