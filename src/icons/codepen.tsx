import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, 3.03, 0] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "codepen",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(12, 12)}>
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<motion.line {...part(redraw(0.22, 0.35))} x1="12" x2="12" y1="2" y2="8.5" />
			<motion.polyline {...part(redraw(0.28, 0.35))} points="2 15.5 12 8.5 22 15.5" />
			<motion.polyline {...part(redraw(0.34, 0.35))} points="22 8.5 12 15.5 2 8.5" />
			<motion.line {...part(redraw(0.4, 0.35))} x1="12" x2="12" y1="22" y2="15.5" />
		</motion.g>
	),
});
