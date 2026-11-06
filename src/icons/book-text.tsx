import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "book-text",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M8 7h6" />
			<motion.path {...part(redraw(0.2, 0.4))} d="M8 11h8" />
		</motion.g>
	),
});
