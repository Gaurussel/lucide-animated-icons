import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "compass",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 60, -35, 0] }, { duration: 0.9, times: [0, 0.3, 0.65, 1] }))}
				d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
				style={pivot(12, 12)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.96, 1] }, { duration: 0.9, times: [0, 0.3, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
		</>
	),
});
