import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = (delay: number) =>
	pose(
		{ rotate: [0, 8, -24, 0] },
		{ duration: 0.72, delay, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
	);
const hole = pose(
	{ scale: [1, 1, 3, 1] },
	{ duration: 0.55, delay: 0.15, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "tag",
	render: (part) => (
		<motion.g {...part(swing(0))} style={pivot(7.5, 7.5)}>
			<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
			<motion.circle {...part(hole)} cx="7.5" cy="7.5" fill="currentColor" r=".5" style={centered} />
		</motion.g>
	),
});
