import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -6, 0], rotate: [0, 200, 360] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy], reset: true },
);
const catchIt = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "coins",
	render: (part) => (
		<>
			<motion.g {...part(catchIt)}>
				<path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
				<path d="m16.71 13.88.7.71-2.82 2.82" />
			</motion.g>
			<motion.g {...part(toss)} style={pivot(8, 8)}>
				<circle cx="8" cy="8" r="6" />
				<path d="M7 6h1v4" />
			</motion.g>
		</>
	),
});
