import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "refresh-ccw-dot",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 14, -360] }, { duration: 0.9, times: [0, 0.15, 1], reset: true }))}
				style={centered}
			>
				<path d="M3 2v6h6" />
				<path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
				<path d="M21 22v-6h-6" />
				<path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 1, 2, 1, 1] }, { duration: 0.9, times: [0, 0.35, 0.6, 0.85, 1] }))}
				cx="12"
				cy="12"
				r="1"
				style={centered}
			/>
		</>
	),
});
