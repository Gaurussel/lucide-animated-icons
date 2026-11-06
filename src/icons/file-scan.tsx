import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const spread = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.65, delay: 0.05, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-scan",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
			<motion.path {...part(spread(-1.5, -1.5))} d="M16 14a2 2 0 0 0-2 2" />
			<motion.path {...part(spread(1.5, -1.5))} d="M20 14a2 2 0 0 1 2 2" />
			<motion.path {...part(spread(1.5, 1.5))} d="M20 22a2 2 0 0 0 2-2" />
			<motion.path {...part(spread(-1.5, 1.5))} d="M16 22a2 2 0 0 1-2-2" />
		</motion.g>
	),
});
