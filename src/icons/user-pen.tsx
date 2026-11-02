import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-pen",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M11.5 15H7a4 4 0 0 0-4 4v2"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -1.2, 0, -1.2, 0], y: [0, 0, 1.2, 0, 1.2, 0] },
						{ duration: 0.8, times: [0, 0.35, 0.5, 0.65, 0.8, 1] },
					),
				)}
				d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			/>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="7"
				r="4"
			/>
		</>
	),
});
