import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, 22, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "git-branch-plus",
	render: (part) => (
		<>
			<path d="M6 3v12" />
			<path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
			<motion.g {...part(swing)} style={pivot(6, 15)}>
				<path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
				<path d="M15 6a9 9 0 0 0-9 9" />
			</motion.g>
			<motion.g {...part(twist)} style={pivot(18, 18)}>
				<path d="M18 15v6" />
				<path d="M21 18h-6" />
			</motion.g>
		</>
	),
});
