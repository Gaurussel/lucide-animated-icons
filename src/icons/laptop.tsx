import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const wake = pose(
	{ y: [0, -2.4, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "laptop",
	render: (part) => (
		<motion.g {...part(wake)} style={edge(0.5, 1)}>
			<path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
			<motion.path {...part(redraw(0.1, 0.5))} d="M20.054 15.987H3.946" />
		</motion.g>
	),
});
