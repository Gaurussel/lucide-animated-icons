import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const mark = (delay: number) =>
	pose({ y: [0, -3, 0], rotate: [0, -20, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-square-quote",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(mark(0.05))} d="M8 12a2 2 0 0 0 2-2V8H8" style={centered} />
			<motion.path {...part(mark(0.15))} d="M14 12a2 2 0 0 0 2-2V8h-2" style={centered} />
		</motion.g>
	),
});
