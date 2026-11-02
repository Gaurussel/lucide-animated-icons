import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-divide",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.line
				{...part(pose({ scaleX: [1, 0.6, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
				x1="8"
				x2="16"
				y1="12"
				y2="12"
			/>
			<motion.line
				{...part(pose({ y: [0, 0, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				x1="12"
				x2="12"
				y1="16"
				y2="16"
			/>
			<motion.line
				{...part(pose({ y: [0, 0, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				x1="12"
				x2="12"
				y1="8"
				y2="8"
			/>
		</>
	),
});
