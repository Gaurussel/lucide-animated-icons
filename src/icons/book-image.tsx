import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const jump = pose({ y: [0, -3, 0] }, { duration: 0.5, delay: 0.15, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-image",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.path {...part(redraw(0.1, 0.45))} d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<motion.circle {...part(jump)} cx="10" cy="8" r="2" />
		</motion.g>
	),
});
