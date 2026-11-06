import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose(
	{ scale: [1, 1, 1.18, 1] },
	{ duration: 0.72, times: [0, 0.45, 0.55, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "bold",
	render: (part) => (
		<motion.g {...part(stamp)} style={centered}>
			<motion.path
				{...part(redraw(0, 0.45))}
				d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
			/>
		</motion.g>
	),
});
