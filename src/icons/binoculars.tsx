import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const look = (delay: number) =>
	pose(
		{ x: [0, -3, 3, 0], y: [0, -1.5, -1.5, 0] },
		{ duration: 0.65, delay, times: [0, 0.18, 0.42, 1], ease: [snap, "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "binoculars",
	render: (part) => (
		<>
			<motion.g {...part(look(0))}>
				<path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
				<path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
				<path d="M10 10h4" />
				<path d="M 22 16 L 2 16" />
			</motion.g>
			<motion.g {...part(look(0.07))}>
				<path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
				<path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
			</motion.g>
		</>
	),
});
