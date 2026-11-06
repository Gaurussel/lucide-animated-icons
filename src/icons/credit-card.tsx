import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const swipe = pose(
	{ x: [0, -2, 12, -10, 0], rotate: [0, -2.4, 3.6, -3.6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "credit-card",
	render: (part) => (
		<motion.g {...part(swipe)} style={centered}>
			<rect height="14" rx="2" width="20" x="2" y="5" />
			<motion.line {...part(redraw(0.3, 0.38))} x1="2" x2="22" y1="10" y2="10" />
		</motion.g>
	),
});
