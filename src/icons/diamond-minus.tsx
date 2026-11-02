import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tilt = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const _twist = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.5, 1] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);
const _dot = (delay: number) =>
	pose({ scale: [1, 2, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "diamond-minus",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path
				{...part(tilt)}
				d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(redraw(0.1, 0.4))} d="M8 12h8" />
		</motion.g>
	),
});
