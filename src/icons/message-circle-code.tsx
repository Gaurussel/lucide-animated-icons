import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const bracket = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "message-circle-code",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(2, 22)}>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
			<motion.path {...part(bracket(-2.5))} d="M10 9.5 8 12l2 2.5" />
			<motion.path {...part(bracket(2.5))} d="m14 9.5 2 2.5-2 2.5" />
		</motion.g>
	),
});
