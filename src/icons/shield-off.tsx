import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shield-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 0.9, 0.967, 1, 1, 1, 1], opacity: [1, 1, 1, 0.667, 0.5, 0.5, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.5, 0.6, 0.65, 0.85, 1] },
					),
				)}
				style={centered}
			>
				<path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
				<path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.8, times: [0, 0.12, 0.4, 0.8, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
