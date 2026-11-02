import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const tumble = pose(
	{ rotate: [0, 20, -360], y: [0, 1, 0] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "pill",
	render: (part) => (
		<motion.g {...part(tumble)} style={centered}>
			<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
			<motion.path {...part(redraw(0.3, 0.35))} d="m8.5 8.5 7 7" />
		</motion.g>
	),
});
