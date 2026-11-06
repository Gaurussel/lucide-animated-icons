import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose({ scale: [1, 1.21, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const twist = pose(
	{ scale: [1, 0.7, 1], rotate: [0, 0, 0] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "git-pull-request-create",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="6" cy="6" r="3" style={centered} />
			<path d="M6 9v12" />
			<motion.path {...part(redraw(0.05, 0.45))} d="M13 6h3a2 2 0 0 1 2 2v3" />
			<motion.g {...part(twist)} style={pivot(18, 18)}>
				<path d="M18 15v6" />
				<path d="M21 18h-6" />
			</motion.g>
		</>
	),
});
