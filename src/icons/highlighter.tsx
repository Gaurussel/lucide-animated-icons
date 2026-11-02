import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const swipe = pose(
	{ x: [0, -3, 3, 0], y: [0, 1, -1, 0], rotate: [0, -10, 8, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "highlighter",
	render: (part) => (
		<motion.g {...part(swipe)} style={pivot(3, 20)}>
			<motion.path {...part(redraw(0.1, 0.45))} d="m9 11-6 6v3h9l3-3" />
			<path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
		</motion.g>
	),
});
