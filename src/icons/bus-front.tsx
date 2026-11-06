import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const approach = pose(
	{ scale: [1, 1.15, 1], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const mirror = (direction: number) =>
	pose({ rotate: [0, 30 * direction, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "bus-front",
	render: (part) => (
		<motion.g {...part(approach)} style={centered}>
			<motion.path {...part(mirror(1))} d="M4 6 2 7" style={pivot(4, 6)} />
			<path d="M10 6h4" />
			<motion.path {...part(mirror(-1))} d="m22 7-2-1" style={pivot(20, 6)} />
			<rect height="16" rx="2" width="16" x="4" y="3" />
			<path d="M4 11h16" />
			<path d="M8 15h.01" />
			<path d="M16 15h.01" />
			<path d="M6 19v2" />
			<path d="M18 21v-2" />
		</motion.g>
	),
});
