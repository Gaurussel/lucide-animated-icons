import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-big-down-dash",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M15 5H9"
				style={centered}
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.6, 1] }))}
				d="M15 9v3h4l-7 7-7-7h4V9z"
			/>
		</>
	),
});
