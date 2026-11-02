import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -3, 0], rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-open-check",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M12 21V7" />
			<motion.path {...part(redraw(0.15, 0.45))} d="m16 12 2 2 4-4" />
			<path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
		</motion.g>
	),
});
