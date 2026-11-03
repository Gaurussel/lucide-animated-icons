import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const glance = pose(
	{ x: [0, -4, 0], y: [0, -2, 0], rotate: [0, -28, 0] },
	{ duration: 0.72, times: [0, 0.25, 1], ease: [snap, springy] },
);
const blink = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "smile-plus",
	render: (part) => (
		<>
			<path d="M22 11v1a10 10 0 1 1-9-10" />
			<motion.g {...part(glance)} style={pivot(12, 12)}>
				<motion.path {...part(redraw(0.05, 0.5))} d="M8 14s1.5 2 4 2 4-2 4-2" />
				<motion.line {...part(blink(0.1))} x1="9" x2="9.01" y1="9" y2="9" />
				<motion.line {...part(blink(0.16))} x1="15" x2="15.01" y1="9" y2="9" />
			</motion.g>
			<motion.g {...part(nod)} style={centered}>
				<path d="M16 5h6" />
				<path d="M19 2v6" />
			</motion.g>
		</>
	),
});
