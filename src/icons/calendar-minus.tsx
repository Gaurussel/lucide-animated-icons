import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -6, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const tear = pose(
	{ x: [0, 2.4, 0], opacity: [1, 0.2, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "calendar-minus",
	render: (part) => (
		<>
			<motion.g {...part(flip)} style={pivot(12, 22)}>
				<motion.path {...part(rings(0.08))} d="M16 2v4" />
				<path d="M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" />
				<path d="M3 10h18" />
				<motion.path {...part(rings(0))} d="M8 2v4" />
			</motion.g>
			<motion.path {...part(tear)} d="M16 19h6" />
		</>
	),
});
