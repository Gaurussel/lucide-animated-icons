import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const crank = pose(
	{ rotate: [0, 12, -42, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.34, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "wrench",
	render: (part) => (
		<motion.g {...part(crank)} style={pivot(16, 8)}>
			<motion.path
				{...part(redraw(0.1, 0.55))}
				d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
			/>
		</motion.g>
	),
});
