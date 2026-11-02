import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circuit-board",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.93, 1] }, { duration: 0.8, times: [0, 0.3, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 1] }))}
				d="M11 9h4a2 2 0 0 0 2-2V3"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.55, 1] }))}
				cx="9"
				cy="9"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, delay: 0.15, times: [0, 0.25, 0.45, 1] }),
				)}
				d="M7 21v-4a2 2 0 0 1 2-2h4"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.65, delay: 0.2, times: [0, 0.25, 0.6, 1] }))}
				cx="15"
				cy="15"
				r="2"
				style={centered}
			/>
		</>
	),
});
