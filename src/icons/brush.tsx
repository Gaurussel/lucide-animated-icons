import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "brush",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, 10, 0] }, { duration: 0.8, times: [0, 0.25, 0.7, 1] }))}
			style={pivot(5, 19)}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.5, 0.9] }))}
				d="m11 10 3 3"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.85, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"
				style={centered}
			/>
			<path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
		</motion.g>
	),
});
