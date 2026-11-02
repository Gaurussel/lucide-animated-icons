import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const twirl = pose(
	{ y: [0, 1, -3, 0], rotate: [0, -20, 180, 360] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "diamond",
	render: (part) => (
		<motion.g {...part(twirl)} style={centered}>
			<motion.path
				{...part(redraw(0.12, 0.5))}
				d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
			/>
		</motion.g>
	),
});
