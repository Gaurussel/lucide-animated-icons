import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "share-2",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.3, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.35, 1] }))}
				cx="6"
				cy="12"
				r="3"
				style={centered}
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.28, 0.6, 1] }))}
				x1="8.59"
				x2="15.42"
				y1="13.51"
				y2="17.49"
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.28, 0.6, 1] }))}
				x1="15.41"
				x2="8.59"
				y1="6.51"
				y2="10.49"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.3, 1, 1] }, { duration: 0.9, times: [0, 0.5, 0.68, 0.86, 1] }))}
				cx="18"
				cy="19"
				r="3"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.3, 1, 1] }, { duration: 0.9, times: [0, 0.5, 0.68, 0.86, 1] }))}
				cx="18"
				cy="5"
				r="3"
				style={centered}
			/>
		</>
	),
});
