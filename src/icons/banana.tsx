import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -4, 0], rotate: [0, -25, 0] },
	{ duration: 0.72, times: [0, 0.3, 1], ease: [snap, springy] },
);
const peel = pose(
	{ rotate: [0, 0, 22, 0] },
	{ duration: 0.72, times: [0, 0.22, 0.36, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "banana",
	render: (part) => (
		<motion.g {...part(toss)} style={centered}>
			<motion.path {...part(peel)} d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" style={pivot(14, 15)} />
			<path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
		</motion.g>
	),
});
