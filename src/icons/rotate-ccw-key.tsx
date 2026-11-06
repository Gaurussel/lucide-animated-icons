import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const twist = pose(
	{ rotate: [0, 6, -48, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const turn = pose(
	{ rotate: [0, 0, -360] },
	{ duration: 0.7, delay: 0.05, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "rotate-ccw-key",
	render: (part) => (
		<>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
				<path d="M3 3v5h5" />
			</motion.g>
			<motion.g {...part(twist)} style={pivot(10, 14)}>
				<path d="m14.5 9.5 1 1" />
				<path d="m15.5 8.5-4 4" />
				<circle cx="10" cy="14" r="2" />
			</motion.g>
		</>
	),
});
