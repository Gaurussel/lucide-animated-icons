import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-no-axes-column-increasing",
	render: (part) => (
		<>
			<motion.line
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				style={edge(0.5, 1)}
				x1="12"
				x2="12"
				y1="20"
				y2="10"
			/>
			<motion.line
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.35, 0.5, 1] }),
				)}
				style={edge(0.5, 1)}
				x1="18"
				x2="18"
				y1="20"
				y2="4"
			/>
			<motion.line
				{...part(pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				style={edge(0.5, 1)}
				x1="6"
				x2="6"
				y1="20"
				y2="16"
			/>
		</>
	),
});
