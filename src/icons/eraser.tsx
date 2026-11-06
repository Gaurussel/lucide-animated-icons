import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const scrub = pose(
	{ x: [0, -1.8, 1.8, -1.2, 0], y: [0, 0.6, -0.6, 0, 0], rotate: [0, -6, 4.8, -3, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "eraser",
	render: (part) => (
		<motion.g {...part(scrub)} style={pivot(10, 20)}>
			<path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
			<motion.path {...part(redraw(0.3, 0.38))} d="m5.082 11.09 8.828 8.828" />
		</motion.g>
	),
});
