import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const settle = pose(
	{ rotate: [0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.45, 0.55, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "arrow-big-left",
	render: (part) => (
		<motion.g {...part(settle)} style={centered}>
			<motion.g {...part(dash)}>
				<motion.path {...part(redraw(0.23, 0.42))} d="M18 15h-6v4l-7-7 7-7v4h6v6z" />
			</motion.g>
		</motion.g>
	),
});
