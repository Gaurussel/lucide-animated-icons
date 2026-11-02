import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const grow = (delay: number) =>
	pose(
		{ scale: [1, 0.8, 1.3, 1] },
		{ duration: 0.6, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);
const hopLetter = (delay: number) =>
	pose({ y: [0, -5, 0], rotate: [0, -10, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "case-sensitive",
	render: (part) => (
		<>
			<motion.g {...part(grow(0))} style={edge(0.5, 1)}>
				<path d="m3 15 4-8 4 8" />
				<path d="M4 13h6" />
			</motion.g>
			<motion.g {...part(hopLetter(0.1))} style={edge(0.5, 1)}>
				<circle cx="18" cy="12" r="3" />
				<path d="M21 9v6" />
			</motion.g>
		</>
	),
});
