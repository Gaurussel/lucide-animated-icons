import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "diff",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M12 3v14"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1.0, 0.7, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M5 10h14"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
				d="M5 21h14"
			/>
		</>
	),
});
