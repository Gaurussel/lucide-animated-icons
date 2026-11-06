import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const tip = pose(
	{ rotate: [0, 0, 12, 0] },
	{ duration: 0.72, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "tally-1",
	render: (part) => (
		<motion.g {...part(tip)} style={pivot(4, 20)}>
			<motion.path {...part(redraw(0, 0.35))} d="M4 4v16" />
		</motion.g>
	),
});
