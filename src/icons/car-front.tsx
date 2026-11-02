import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const approach = pose(
	{ scale: [1, 1.25, 1], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const beam = (delay: number) =>
	pose({ scale: [1, 2.5, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "car-front",
	render: (part) => (
		<motion.g {...part(approach)} style={edge(0.5, 1)}>
			<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
			<motion.path {...part(beam(0.15))} d="M7 14h.01" style={centered} />
			<motion.path {...part(beam(0.15))} d="M17 14h.01" style={centered} />
			<rect height="8" rx="2" width="18" x="3" y="10" />
			<path d="M5 18v2" />
			<path d="M19 18v2" />
		</motion.g>
	),
});
