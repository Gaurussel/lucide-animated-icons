import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const burst = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const turn = pose(
	{ rotate: [0, 0, 0] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "component",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(12, 12)}>
			<motion.path
				{...part(burst(3, 0))}
				d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
			/>
			<motion.path
				{...part(burst(-3, 0))}
				d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
			/>
			<motion.path
				{...part(burst(0, 3))}
				d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
			/>
			<motion.path
				{...part(burst(0, -3))}
				d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
			/>
		</motion.g>
	),
});
