import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const rock = pose(
	{ rotate: [0, -20, 0], y: [0, -3, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "bean-off",
	render: (part) => (
		<>
			<motion.g {...part(rock)} style={centered}>
				<path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" />
				<path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" />
				<path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" />
			</motion.g>
			<motion.line {...part(redraw(0.1, 0.45))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
