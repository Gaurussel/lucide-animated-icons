import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -6, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const tick = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "calendar-clock",
	render: (part) => (
		<>
			<motion.g {...part(flip)} style={pivot(12, 22)}>
				<motion.path {...part(rings(0.08))} d="M16 2v4" />
				<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
				<path d="M3 10h5" />
				<motion.path {...part(rings(0))} d="M8 2v4" />
			</motion.g>
			<circle cx="16" cy="16" r="6" />
			<motion.path {...part(tick)} d="M16 14v2.2l1.6 1" style={pivot(16, 16)} />
		</>
	),
});
