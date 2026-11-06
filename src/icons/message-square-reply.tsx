import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const back = pose({ x: [0, -1.8, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-square-reply",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(back)} d="m10 7-3 3 3 3" />
			<motion.path {...part(redraw(0.1, 0.45))} d="M17 13v-1a2 2 0 0 0-2-2H7" />
		</motion.g>
	),
});
