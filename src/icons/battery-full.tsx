import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, redraw, snap, springy } from "../helpers.ts";

const spark = pose(
	{ x: [0, 0, 2, 0] },
	{ duration: 0.65, times: [0, 0.5, 0.58, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "battery-full",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path {...part(redraw(0.05, 0.4))} d="M6 10v4" />
			<motion.path {...part(redraw(0.13, 0.4))} d="M10 10v4" />
			<motion.path {...part(redraw(0.21, 0.4))} d="M14 10v4" />
			<motion.path {...part(spark)} d="M22 14v-4" />
			<rect height="12" rx="2" width="16" x="2" y="6" />
		</motion.g>
	),
});
