import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring } from "../helpers.ts";

const shake = pose(
	{ y: [0, 0.9, -1.8, 0], rotate: [0, 4.8, -12, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", "easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "thermometer",
	render: (part) => (
		<motion.g {...part(shake)} style={pivot(12, 18)}>
			<motion.path {...part(redraw(0.1, 0.6))} d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
		</motion.g>
	),
});
