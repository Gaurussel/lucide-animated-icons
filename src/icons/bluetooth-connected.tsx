import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bluetooth-connected",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.75, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m7 7 10 10-5 5V2l5 5L7 17"
				style={centered}
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.15, times: [0, 0.15, 0.5, 1] }))}
				x1="18"
				x2="21"
				y1="12"
				y2="12"
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.15, 0.5, 1] }))}
				x1="3"
				x2="6"
				y1="12"
				y2="12"
			/>
		</>
	),
});
