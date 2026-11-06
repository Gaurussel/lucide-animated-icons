import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const pour = pose(
	{ rotate: [0, 22.8, 0], x: [0, -1.2, 0] },
	{ duration: 0.75, times: [0, 0.35, 1], ease: [snap, springy] },
);
const label = pose({ x: [0, 0.9, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.35, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bottle-wine",
	render: (part) => (
		<motion.g {...part(pour)} style={pivot(12, 22)}>
			<path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
			<motion.path {...part(label)} d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />
		</motion.g>
	),
});
