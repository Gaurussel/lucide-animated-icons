import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const speak = pose(
	{ y: [0, 0.6, -1.2, 0] },
	{ duration: 0.6, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const ripple = (delay: number, scale: number) =>
	pose(
		{ scale: [1, scale, 1], opacity: [1, 0.4, 1] },
		{ duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "podcast",
	render: (part) => (
		<>
			<motion.path {...part(ripple(0.22, 1.18))} d="M16.85 18.58a9 9 0 1 0-9.7 0" style={pivot(12, 11)} />
			<motion.path {...part(ripple(0.12, 1.3))} d="M8 14a5 5 0 1 1 8 0" style={pivot(12, 11)} />
			<motion.g {...part(speak)}>
				<circle cx="12" cy="11" r="1" />
				<path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
			</motion.g>
		</>
	),
});
