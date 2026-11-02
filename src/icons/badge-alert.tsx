import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, redraw, snap, springy } from "../helpers.ts";

const twirl = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const jump = pose({ y: [0, -3, 0] }, { duration: 0.5, delay: 0.2, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "badge-alert",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path
				{...part(twirl)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.line {...part(redraw(0.12, 0.4))} x1="12" x2="12" y1="8" y2="12" />
			<motion.line {...part(jump)} x1="12" x2="12.01" y1="16" y2="16" />
		</motion.g>
	),
});
