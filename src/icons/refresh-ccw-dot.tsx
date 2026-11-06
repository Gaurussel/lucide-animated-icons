import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, 30, -360] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const pop = pose({ scale: [1, 1.6, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "refresh-ccw-dot",
	render: (part) => (
		<>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="M3 2v6h6" />
				<path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
				<path d="M21 22v-6h-6" />
				<path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
			</motion.g>
			<motion.circle {...part(pop)} cx="12" cy="12" r="1" style={centered} />
		</>
	),
});
