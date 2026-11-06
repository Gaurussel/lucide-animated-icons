import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const settle = pose(
	{ rotate: [0, 0, -4.8, 0], y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.5, 0.62, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "table-2",
	render: (part) => (
		<motion.g {...part(settle)} style={pivot(12, 21)}>
			<motion.path
				{...part(redraw(0, 0.5))}
				d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
			/>
		</motion.g>
	),
});
