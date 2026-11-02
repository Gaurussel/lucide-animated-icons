import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "undo-dot",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 4, -14, -14, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] }))}
				d="M21 17a9 9 0 0 0-15-6.7L3 13"
				style={pivot(12, 17)}
			/>
			<motion.path
				{...part(pose({ rotate: [0, 5, -20, -20, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] }))}
				d="M3 7v6h6"
				style={pivot(12, 17)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1, 2.2, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.7, 1] }))}
				cx="12"
				cy="17"
				r="1"
				style={centered}
			/>
		</>
	),
});
