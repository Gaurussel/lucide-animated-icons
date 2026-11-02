import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const settle = pose(
	{ scale: [1, 1, 1.2, 1], rotate: [0, 0, -12, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "infinity",
	render: (part) => (
		<motion.g {...part(settle)} style={pivot(12, 12)}>
			<motion.path {...part(redraw(0, 0.4))} d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
		</motion.g>
	),
});
