import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -10, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const dot = (delay: number) =>
	pose({ scale: [1, 2.2, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "calendar-range",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 22)}>
			<rect height="18" rx="2" width="18" x="3" y="4" />
			<motion.path {...part(rings(0.08))} d="M16 2v4" />
			<path d="M3 10h18" />
			<motion.path {...part(rings(0))} d="M8 2v4" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M17 14h-6" />
			<motion.path {...part(redraw(0.25, 0.4))} d="M13 18H7" />
			<motion.path {...part(dot(0.1))} d="M7 14h.01" style={centered} />
			<motion.path {...part(dot(0.35))} d="M17 18h.01" style={centered} />
		</motion.g>
	),
});
