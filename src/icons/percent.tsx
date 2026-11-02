import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "percent",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 1] }))}
				x1="19"
				x2="5"
				y1="5"
				y2="19"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 1], delay: 0.15 }))}
				cx="6.5"
				cy="6.5"
				r="2.5"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 1], delay: 0.3 }))}
				cx="17.5"
				cy="17.5"
				r="2.5"
				style={centered}
			/>
		</>
	),
});
