import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -6, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const day = (delay: number) =>
	pose({ scale: [1, 1.72, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "calendar-days",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 22)}>
			<motion.path {...part(rings(0))} d="M8 2v4" />
			<motion.path {...part(rings(0.08))} d="M16 2v4" />
			<rect height="18" rx="2" width="18" x="3" y="4" />
			<path d="M3 10h18" />
			<motion.path {...part(day(0.1))} d="M8 14h.01" style={centered} />
			<motion.path {...part(day(0.15))} d="M12 14h.01" style={centered} />
			<motion.path {...part(day(0.2))} d="M16 14h.01" style={centered} />
			<motion.path {...part(day(0.25))} d="M8 18h.01" style={centered} />
			<motion.path {...part(day(0.3))} d="M12 18h.01" style={centered} />
			<motion.path {...part(day(0.35))} d="M16 18h.01" style={centered} />
		</motion.g>
	),
});
