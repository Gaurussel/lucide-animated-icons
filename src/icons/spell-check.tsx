import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const grow = pose(
	{ y: [0, 0.6, -1.8, 0], scale: [1, 0.97, 1.09, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const tick = pose(
	{ scale: [1, 1, 1.24, 1] },
	{ duration: 0.7, times: [0, 0.5, 0.62, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "spell-check",
	render: (part) => (
		<>
			<motion.g {...part(grow)} style={edge(0.5, 1)}>
				<path d="m6 16 6-12 6 12" />
				<path d="M8 12h8" />
			</motion.g>
			<motion.g {...part(tick)} style={pivot(18, 22)}>
				<motion.path {...part(redraw(0.2, 0.4))} d="m16 20 2 2 4-4" />
			</motion.g>
		</>
	),
});
