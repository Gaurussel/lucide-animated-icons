import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const rise = pose(
	{ y: [0, -2.4, 0], rotate: [0, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const peak = pose({ pathLength: [1, 0, 1] }, { duration: 0.7, times: [0, 0.01, 1], ease: ["easeInOut", "easeOut"] });

export default createAnimatedIcon({
	name: "mountain",
	render: (part) => (
		<motion.g {...part(rise)} style={edge(0.5, 1)}>
			<motion.path {...part(peak)} d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</motion.g>
	),
});
