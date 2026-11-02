import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const grow = pose(
	{ scale: [1, 0.8, 1.35, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const bumped = pose(
	{ x: [0, 0, 3, 0], rotate: [0, 0, 14, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "case-upper",
	render: (part) => (
		<>
			<motion.g {...part(grow)} style={edge(0.5, 1)}>
				<path d="m3 15 4-8 4 8" />
				<motion.path {...part(redraw(0.2, 0.35))} d="M4 13h6" />
			</motion.g>
			<motion.path {...part(bumped)} d="M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" style={edge(0, 1)} />
		</>
	),
});
