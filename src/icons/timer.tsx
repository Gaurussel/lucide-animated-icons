import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "timer",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ y: [0, 2, 0] }, { duration: 0.3, times: [0, 0.5, 1] }))}
				x1="10"
				x2="14"
				y1="2"
				y2="2"
			/>
			<motion.line
				{...part(pose({ rotate: 360 }, { duration: 0.6, delay: 0.2, reset: true }))}
				style={pivot(12, 14)}
				x1="12"
				x2="15"
				y1="14"
				y2="11"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.86, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				cx="12"
				cy="14"
				r="8"
				style={centered}
			/>
		</>
	),
});
