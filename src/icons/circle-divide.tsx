import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-divide",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ scaleX: [1, 1, 0.7, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				style={centered}
				x1="8"
				x2="16"
				y1="12"
				y2="12"
			/>
			<motion.line
				{...part(pose({ y: [0, 1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				x1="12"
				x2="12"
				y1="16"
				y2="16"
			/>
			<motion.line
				{...part(pose({ y: [0, -1.5, 1.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				x1="12"
				x2="12"
				y1="8"
				y2="8"
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
