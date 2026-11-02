import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tip = pose(
	{ rotate: [0, 6, -10, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-open",
	render: (part) => (
		<motion.g {...part(tip)} style={pivot(2, 20)}>
			<motion.path
				{...part(redraw(0.08, 0.5))}
				d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
			/>
		</motion.g>
	),
});
