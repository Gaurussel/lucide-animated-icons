import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-big-right-dash",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.5, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M5 9v6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.6, 1] }))}
				d="M9 9h3V5l7 7-7 7v-4H9V9z"
			/>
		</>
	),
});
