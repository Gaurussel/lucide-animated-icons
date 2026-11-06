import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, -0.9, 1.5, 0], rotate: [0, 1.83, -12.12, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.4, 1], ease: ["easeInOut", snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "triangle",
	render: (part) => (
		<motion.g {...part(roll)} style={edge(0.5, 0.62)}>
			<motion.path
				{...part(redraw(0.05, 0.6))}
				d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
			/>
		</motion.g>
	),
});
