import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const approach = pose(
	{ y: [0, 2, 0], scale: [1, 1.22, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "train-front",
	render: (part) => (
		<>
			<motion.g {...part(approach)} style={edge(0.5, 1)}>
				<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
				<motion.path {...part(redraw(0.15, 0.4))} d="m9 15-1-1" />
				<motion.path {...part(redraw(0.15, 0.4))} d="m15 15 1-1" />
				<path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
			</motion.g>
			<path d="m8 19-2 3" />
			<path d="m16 19 2 3" />
		</>
	),
});
