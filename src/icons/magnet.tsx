import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring, snap } from "../helpers.ts";

const pull = pose(
	{ x: [0, 1.8, 0], y: [0, -1.8, 0], rotate: [0, 10.8, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "magnet",
	render: (part) => (
		<motion.g {...part(pull)} style={centered}>
			<path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
			<motion.path {...part(redraw(0.15, 0.4))} d="m5 8 4 4" />
			<motion.path {...part(redraw(0.22, 0.4))} d="m12 15 4 4" />
		</motion.g>
	),
});
