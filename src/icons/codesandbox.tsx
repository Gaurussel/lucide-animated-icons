import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, 3.03, 0] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "codesandbox",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(12, 12)}>
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
			<motion.polyline {...part(redraw(0.22, 0.35))} points="7.5 4.21 12 6.81 16.5 4.21" />
			<motion.polyline {...part(redraw(0.28, 0.35))} points="3.27 6.96 12 12.01 20.73 6.96" />
			<motion.line {...part(redraw(0.34, 0.35))} x1="12" x2="12" y1="22.08" y2="12" />
			<motion.polyline {...part(redraw(0.4, 0.35))} points="7.5 19.79 7.5 14.6 3 12" />
			<motion.polyline {...part(redraw(0.46, 0.35))} points="21 12 16.5 14.6 16.5 19.79" />
		</motion.g>
	),
});
