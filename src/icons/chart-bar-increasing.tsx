import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-bar-increasing",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.86, 0.86, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M7 11h8"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M7 16h12"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				d="M7 6h3"
				style={edge(0, 0.5)}
			/>
		</motion.g>
	),
});
