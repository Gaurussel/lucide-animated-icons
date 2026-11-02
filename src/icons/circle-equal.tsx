import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-equal",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, -2, -2, 0], scaleX: [1, 0.7, 0.7, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M7 10h10"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ y: [0, 2, 2, 0], scaleX: [1, 0.7, 0.7, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M7 14h10"
				style={centered}
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
