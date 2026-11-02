import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-pound-sterling",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				d="M10 16V9.5a1 1 0 0 1 5 0"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.05, times: [0, 0.2, 0.5, 1] }))}
				d="M8 12h4"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.2, 0.5, 1] }))}
				d="M8 16h7"
				style={edge(0, 0.5)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
		</>
	),
});
