import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const head = pose(
	{ y: [0, 0.9, -2.4, 0], x: [0, 0, 0.3, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const shoulders = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

const tick = pose(
	{ scale: [1, 1, 1.21, 1] },
	{ duration: 0.72, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "user-round-check",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M2 21a8 8 0 0 1 13.292-6" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.g {...part(tick)} style={edge(0.5, 0.5)}>
				<motion.path {...part(redraw(0.22, 0.4))} d="m16 19 2 2 4-4" />
			</motion.g>
		</>
	),
});
