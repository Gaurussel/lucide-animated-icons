import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const twist = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "command",
	render: (part) => (
		<motion.g {...part(twist)} style={centered}>
			<motion.path
				{...part(redraw(0.1, 0.5))}
				d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
			/>
		</motion.g>
	),
});
