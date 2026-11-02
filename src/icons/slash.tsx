import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring } from "../helpers.ts";

const swipe = pose(
	{ rotate: [0, 12, -22, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "slash",
	render: (part) => (
		<motion.g {...part(swipe)} style={centered}>
			<motion.path {...part(redraw(0.1, 0.4))} d="M22 2 2 22" />
		</motion.g>
	),
});
