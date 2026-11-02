import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const glance = pose(
	{ x: [0, -4, 0], y: [0, -2, 0], rotate: [0, -28, 0] },
	{ duration: 0.72, times: [0, 0.25, 1], ease: [snap, springy] },
);
const blink = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "smile",
	render: (part) => (
		<motion.g {...part(hop(0.72))} style={centered}>
			<circle cx="12" cy="12" r="10" />
			<motion.g {...part(glance)} style={pivot(12, 12)}>
				<motion.path {...part(redraw(0.05, 0.5))} d="M8 14s1.5 2 4 2 4-2 4-2" />
				<motion.line {...part(blink(0.1))} x1="9" x2="9.01" y1="9" y2="9" />
				<motion.line {...part(blink(0.16))} x1="15" x2="15.01" y1="9" y2="9" />
			</motion.g>
		</motion.g>
	),
});
