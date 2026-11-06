import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tap = pose(
	{ y: [0, -2.4, 0.6, 0], rotate: [0, -9, 0, 0] },
	{ duration: 0.7, times: [0, 0.25, 0.4, 1], ease: [snap, "easeIn", springy] },
);
const finger = pose(
	{ rotate: [0, 0, -8.4, 0] },
	{ duration: 0.7, times: [0, 0.38, 0.48, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "pointer",
	render: (part) => (
		<motion.g {...part(tap)} style={pivot(12, 22)}>
			<path d="M22 14a8 8 0 0 1-8 8" />
			<path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
			<path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
			<motion.path {...part(finger)} d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" style={pivot(8, 14)} />
			<path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
		</motion.g>
	),
});
