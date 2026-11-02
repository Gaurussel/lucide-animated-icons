import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rows-4",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose(
						{ scaleX: [1, 0.94, 1, 1], scaleY: [1, 0.88, 1, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.45, 1] },
					),
				)}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -1.5, 0, 0], scaleX: [1, 1, 0.1, 1, 1] },
						{ duration: 0.8, times: [0, 0.15, 0.35, 0.55, 1] },
					),
				)}
				d="M21 7.5H3"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.27, 0.47, 0.67, 1] }))}
				d="M21 12H3"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, 1.5, 0, 0], scaleX: [1, 1, 0.1, 1, 1] },
						{ duration: 0.8, times: [0, 0.39, 0.59, 0.79, 1] },
					),
				)}
				d="M21 16.5H3"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
