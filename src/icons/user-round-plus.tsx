import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const head = pose({ y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const shoulders = pose({ y: [0, -1.5, 0] }, { duration: 0.7, delay: 0.04, times: [0, 0.25, 1], ease: [snap, springy] });

const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "user-round-plus",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M2 21a8 8 0 0 1 13.292-6" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.g {...part(twist)} style={centered}>
				<path d="M19 16v6" />
				<path d="M22 19h-6" />
			</motion.g>
		</>
	),
});
