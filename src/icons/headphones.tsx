import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const bop = pose(
	{ y: [0, 0, -1.8, 0], rotate: [0, 0, -8.4, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "headphones",
	render: (part) => (
		<motion.g {...part(bop)} style={pivot(12, 12)}>
			<motion.path
				{...part(redraw(0, 0.4))}
				d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
			/>
		</motion.g>
	),
});
