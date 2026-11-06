import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const rock = pose(
	{ rotate: [0, -12, 0], y: [0, -1.8, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "bean",
	render: (part) => (
		<motion.g {...part(rock)} style={centered}>
			<path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
		</motion.g>
	),
});
