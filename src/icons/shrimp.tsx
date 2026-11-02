import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const flick = pose(
	{ rotate: [0, 8, -22, 0], y: [0, 1, -3, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, ring] },
);
const paddle = pose(
	{ rotate: [0, 0, 30, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, ring] },
);
const tail = pose(
	{ rotate: [0, 0, -25, 0] },
	{ duration: 0.6, delay: 0.06, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "shrimp",
	render: (part) => (
		<motion.g {...part(flick)} style={pivot(14, 14)}>
			<path d="M11 12h.01" />
			<motion.path {...part(tail)} d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" style={pivot(15.5, 21)} />
			<path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" />
			<path d="M14 8a8.5 8.5 0 0 1 0 8" />
			<motion.path {...part(paddle)} d="M16 16c2 0 4.5-4 4-6" style={pivot(16, 16)} />
		</motion.g>
	),
});
