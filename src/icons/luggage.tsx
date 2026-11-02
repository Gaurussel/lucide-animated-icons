import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, -3, 2, 0], rotate: [0, -10, 4, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.4, 1], ease: [snap, "easeInOut", springy] },
);
const handle = pose({ y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "luggage",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(12, 22)}>
			<path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
			<motion.path {...part(handle)} d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
			<path d="M10 20h4" />
			<circle cx="16" cy="20" r="2" />
			<circle cx="8" cy="20" r="2" />
		</motion.g>
	),
});
