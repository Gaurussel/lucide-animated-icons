import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const whirl = pose(
	{ rotate: [0, -40, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const gust = pose({ scale: [1, 0.91, 1] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "loader-pinwheel",
	render: (part) => (
		<motion.g {...part(gust)} style={centered}>
			<circle cx="12" cy="12" r="10" />
			<motion.g {...part(whirl)} style={pivot(12, 12)}>
				<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
				<path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
				<path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
			</motion.g>
		</motion.g>
	),
});
