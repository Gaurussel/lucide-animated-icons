import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const twirl = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const puzzle = pose({ rotate: [0, -25, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });
const jump = pose({ y: [0, -3, 0] }, { duration: 0.5, delay: 0.2, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "badge-question-mark",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path
				{...part(twirl)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.path {...part(puzzle)} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" style={pivot(12, 13)} />
			<motion.line {...part(jump)} x1="12" x2="12.01" y1="17" y2="17" />
		</motion.g>
	),
});
