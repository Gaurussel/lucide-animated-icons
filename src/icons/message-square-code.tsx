import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const bracket = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "message-square-code",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(bracket(-2.5))} d="M10 7.5 8 10l2 2.5" />
			<motion.path {...part(bracket(2.5))} d="m14 7.5 2 2.5-2 2.5" />
		</motion.g>
	),
});
