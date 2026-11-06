import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const wind = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const jab = pose({ x: [0, -1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "undo-2",
	render: (part) => (
		<motion.g {...part(wind)} style={pivot(14.5, 14.5)}>
			<motion.path {...part(jab)} d="M9 14 4 9l5-5" />
			<path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
		</motion.g>
	),
});
