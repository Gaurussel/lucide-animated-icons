import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const cross = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "book-x",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.g {...part(cross)} style={pivot(12, 9.5)}>
				<path d="m14.5 7-5 5" />
				<path d="m9.5 7 5 5" />
			</motion.g>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
		</motion.g>
	),
});
