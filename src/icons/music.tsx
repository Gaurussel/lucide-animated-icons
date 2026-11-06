import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const bop = pose(
	{ y: [0, -2.4, 0], rotate: [0, -8.4, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const head = (delay: number) =>
	pose({ scale: [1, 1.21, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "music",
	render: (part) => (
		<motion.g {...part(bop)} style={pivot(12, 20)}>
			<path d="M9 18V5l12-2v13" />
			<motion.circle {...part(head(0.1))} cx="6" cy="18" r="3" style={centered} />
			<motion.circle {...part(head(0.2))} cx="18" cy="16" r="3" style={centered} />
		</motion.g>
	),
});
