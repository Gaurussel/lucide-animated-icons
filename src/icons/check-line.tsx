import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "check-line",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 0.85, 1] }))}
				d="M20 4L9 15"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.5, 0.5, 1] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M21 19L3 19"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }))}
				d="M9 15L4 10"
			/>
		</>
	),
});
