import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -6, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const peel = pose({ x: [0, -1.5, 0], y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "calendar-fold",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 22)}>
			<motion.path {...part(rings(0))} d="M8 2v4" />
			<motion.path {...part(rings(0.08))} d="M16 2v4" />
			<path d="M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" />
			<path d="M3 10h18" />
			<motion.g {...part(peel)}>
				<motion.path {...part(redraw(0.1, 0.5))} d="M15 22v-4a2 2 0 0 1 2-2h4" />
			</motion.g>
		</motion.g>
	),
});
