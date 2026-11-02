import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const toss = pose({ y: [0, -5, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });
const spin = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "life-buoy",
	render: (part) => (
		<motion.g {...part(toss)}>
			<motion.g {...part(spin)} style={centered}>
				<circle cx="12" cy="12" r="10" />
				<path d="m4.93 4.93 4.24 4.24" />
				<path d="m14.83 9.17 4.24-4.24" />
				<path d="m14.83 14.83 4.24 4.24" />
				<path d="m9.17 14.83-4.24 4.24" />
				<circle cx="12" cy="12" r="4" />
			</motion.g>
		</motion.g>
	),
});
