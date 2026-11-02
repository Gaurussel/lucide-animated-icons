import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-pause",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.line
				{...part(
					pose({ x: [0, -1, 1, 0], scaleY: [1, 1, 0.7, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }),
				)}
				style={centered}
				x1="10"
				x2="10"
				y1="15"
				y2="9"
			/>
			<motion.line
				{...part(
					pose({ x: [0, 1, -1, 0], scaleY: [1, 1, 0.7, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }),
				)}
				style={centered}
				x1="14"
				x2="14"
				y1="15"
				y2="9"
			/>
		</>
	),
});
