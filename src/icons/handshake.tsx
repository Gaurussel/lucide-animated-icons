import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const shake = pose(
	{ y: [0, -2, 1.5, -1.5, 1, -0.5, 0], rotate: [0, -4, 3, -3, 2, -1, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.33, 0.5, 0.67, 0.83, 1] },
);

export default createAnimatedIcon({
	name: "handshake",
	render: (part) => (
		<motion.g {...part(shake)} style={centered}>
			<path d="m11 17 2 2a1 1 0 1 0 3-3" />
			<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
			<path d="m21 3 1 11h-2" />
			<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
			<path d="M3 4h8" />
		</motion.g>
	),
});
