import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, 1.2, -2.4, 0], rotate: [0, 0, -4.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeOut", springy] },
);
const handle = pose({ y: [0, 1.8, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "refrigerator",
	render: (part) => (
		<motion.g {...part(jump)} style={pivot(12, 22)}>
			<path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
			<path d="M5 10h14" />
			<motion.path {...part(handle)} d="M15 7v6" />
		</motion.g>
	),
});
