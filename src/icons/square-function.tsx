import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const bar = pose(
	{ pathLength: [1, 0, 1], x: [0, -3.6, 0] },
	{ duration: 0.4, delay: 0.3, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
);
const flourish = pose(
	{ rotate: [0, 0, -13.2, 0], y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.4, 0.52, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-function",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.55, 0.75))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.g {...part(flourish)} style={pivot(12, 17)}>
				<motion.path {...part(redraw(0, 0.4))} d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
			</motion.g>
			<motion.path {...part(bar)} d="M9 11.2h5.7" />
		</>
	),
});
