import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const twirl = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const strike = pose({ scale: [1, 0.82, 1] }, { duration: 0.65, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "badge-x",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path
				{...part(twirl)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.g {...part(strike)} style={pivot(12, 12)}>
				<motion.line {...part(redraw(0.05, 0.35))} x1="15" x2="9" y1="9" y2="15" />
				<motion.line {...part(redraw(0.22, 0.35))} x1="9" x2="15" y1="9" y2="15" />
			</motion.g>
		</motion.g>
	),
});
