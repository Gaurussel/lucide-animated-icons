import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "message-square-text",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M13 8H7" />
			<motion.path {...part(redraw(0.2, 0.45))} d="M17 12H7" />
		</motion.g>
	),
});
