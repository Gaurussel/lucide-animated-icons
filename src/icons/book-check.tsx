import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-check",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<motion.path {...part(redraw(0.15, 0.45))} d="m9 9.5 2 2 4-4" />
		</motion.g>
	),
});
