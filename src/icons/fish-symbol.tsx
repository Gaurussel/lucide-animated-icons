import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring } from "../helpers.ts";

const swim = pose(
	{ x: [0, -2.5, 3, 0], rotate: [0, 6, -12, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "fish-symbol",
	render: (part) => (
		<motion.g {...part(swim)} style={pivot(14, 12)}>
			<motion.path {...part(redraw(0.08, 0.5))} d="M2 16s9-15 20-4C11 23 2 8 2 8" />
		</motion.g>
	),
});
