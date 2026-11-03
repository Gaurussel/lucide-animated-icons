import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -10, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const strike = pose({ scale: [1, 0.82, 1] }, { duration: 0.7, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "calendar-x",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 22)}>
			<motion.path {...part(rings(0))} d="M8 2v4" />
			<motion.path {...part(rings(0.08))} d="M16 2v4" />
			<rect height="18" rx="2" width="18" x="3" y="4" />
			<path d="M3 10h18" />
			<motion.g {...part(strike)} style={pivot(12, 16)}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m14 14-4 4" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m10 14 4 4" />
			</motion.g>
		</motion.g>
	),
});
