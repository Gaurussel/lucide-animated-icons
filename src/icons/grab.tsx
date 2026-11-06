import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -2.4, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const clench = pose({ y: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "grab",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.g {...part(clench)}>
				<path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
				<path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
				<path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
			</motion.g>
			<path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
			<path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
		</motion.g>
	),
});
