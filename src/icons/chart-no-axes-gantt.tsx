import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-no-axes-gantt",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				d="M8 6h10"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M6 12h9"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M11 18h7"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
