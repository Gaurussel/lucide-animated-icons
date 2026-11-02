import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-no-axes-column-decreasing",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.09, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M12 20V10"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, delay: 0.18, times: [0, 0.35, 0.5, 1] }),
				)}
				d="M18 20v-4"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.02, 0.02, 1] }, { duration: 0.75, times: [0, 0.35, 0.5, 1] }))}
				d="M6 20V4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
