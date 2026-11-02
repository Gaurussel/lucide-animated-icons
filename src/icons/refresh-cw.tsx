import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const turn = pose({ rotate: [0, -20, 360] }, { duration: 0.8, times: [0, 0.15, 1], reset: true });

export default createAnimatedIcon({
	name: "refresh-cw",
	render: (part) => (
		<motion.g {...part(turn)} style={centered}>
			<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
			<path d="M21 3v5h-5" />
			<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
			<path d="M8 16H3v5" />
		</motion.g>
	),
});
