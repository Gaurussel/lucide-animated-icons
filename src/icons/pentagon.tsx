import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -0.2, 1.07, 1], rotate: [0, 0, 12, 0, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.4, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "pentagon",
	render: (part) => (
		<motion.g {...part(jump)}>
			<motion.path
				{...part(flip)}
				d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
				style={pivot(12, 12.5)}
			/>
		</motion.g>
	),
});
