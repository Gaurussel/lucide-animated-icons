import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-open-text",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M12 7v14" />
			<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M6 8h2" />
			<motion.path {...part(redraw(0.16, 0.4))} d="M6 12h2" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M16 8h2" />
			<motion.path {...part(redraw(0.28, 0.4))} d="M16 12h2" />
		</motion.g>
	),
});
