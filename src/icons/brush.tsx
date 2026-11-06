import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, rubber, snap } from "../helpers.ts";

const paint = pose(
	{ x: [0, -1.2, 0.6, 0], y: [0, 1.2, -0.6, 0], rotate: [0, 4.8, -18, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.45, 1], ease: [snap, "easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "brush",
	render: (part) => (
		<>
			<motion.g {...part(paint)} style={pivot(8, 16)}>
				<path d="m11 10 3 3" />
				<path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
			</motion.g>
			<motion.path
				{...part(jelly(0.22, 0.75))}
				d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"
				style={edge(0, 1)}
			/>
		</>
	),
});
