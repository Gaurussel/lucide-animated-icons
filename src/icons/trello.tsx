import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "trello",
	render: (part) => (
		<>
			<motion.rect
				{...part(
					pose(
						{ scaleX: [1, 0.94, 0.94, 1], scaleY: [1, 0.96, 0.96, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.6, 1] },
					),
				)}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.rect
				{...part(
					pose({ x: [0, 0, 3, 0], scaleY: [1, 0.25, 0.25, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }),
				)}
				height="9"
				style={edge(0.5, 0)}
				width="3"
				x="7"
				y="7"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 3.2, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				height="5"
				style={edge(0.5, 0)}
				width="3"
				x="14"
				y="7"
			/>
		</>
	),
});
