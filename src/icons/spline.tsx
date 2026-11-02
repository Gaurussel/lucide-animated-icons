import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "spline",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1, 1.6, 1] }, { duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] }))}
				cx="19"
				cy="5"
				r="2"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.6, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] }))}
				cx="5"
				cy="19"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.3, 0.8, 1] }))}
				d="M5 17A12 12 0 0 1 17 5"
			/>
		</>
	),
});
