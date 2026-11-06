import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const speak = pose(
	{ scale: [1, 0.89, 1.09, 1], rotate: [0, 3.6, -6, 0] },
	{ duration: 0.7, times: [0, 0.14, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "message-circle",
	render: (part) => (
		<motion.g {...part(speak)} style={pivot(2, 22)}>
			<motion.path {...part(redraw(0.14, 0.5))} d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
		</motion.g>
	),
});
