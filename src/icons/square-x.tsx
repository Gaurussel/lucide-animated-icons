import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const twist = pose(
	{ scale: [1, 0.5, 1.15, 1], rotate: [0, 0, 270, 360] },
	{ duration: 0.68, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "square-x",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.4, 0.68))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.g {...part(twist)} style={centered}>
				<path d="m15 9-6 6" />
				<path d="m9 9 6 6" />
			</motion.g>
		</>
	),
});
