import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const grow = pose({ scale: [1, 1.15, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const leap = pose(
	{ y: [0, -3.6, 0], rotate: [0, -12, 0] },
	{ duration: 0.6, delay: 0.08, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "a-large-small",
	render: (part) => (
		<>
			<motion.g {...part(grow)} style={edge(0, 1)}>
				<path d="M4.5 13h6" />
				<path d="m3 16 4.5-9 4.5 9" />
			</motion.g>
			<motion.g {...part(leap)} style={edge(0.5, 1)}>
				<path d="M21 14h-5" />
				<path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
			</motion.g>
		</>
	),
});
