import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "stethoscope",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.35, 0.55, 0.7, 1] }))}
				style={centered}
			>
				<path d="M11 2v2" />
				<path d="M5 2v2" />
				<path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, 12, 12, 12, 0] }, { duration: 0.8, times: [0, 0.35, 0.55, 0.7, 1] }))}
				style={pivot(8, 15)}
			>
				<path d="M8 15a6 6 0 0 0 12 0v-3" />
				<circle cx="20" cy="10" r="2" />
			</motion.g>
		</>
	),
});
