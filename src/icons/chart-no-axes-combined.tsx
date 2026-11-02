import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-no-axes-combined",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M12 16v5"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.27, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M16 14v7"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.36, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M20 10v11"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.9, times: [0, 0.25, 0.5, 1] }))}
				d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				d="M4 18v3"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M8 14v7"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
