import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-column-increasing",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.86, 0.86, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(3, 21)}
		>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M13 17V9"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M18 17V5"
				style={edge(0.5, 1)}
			/>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				d="M8 17v-3"
				style={edge(0.5, 1)}
			/>
		</motion.g>
	),
});
