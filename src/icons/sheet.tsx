import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sheet",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.45, 1] }))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.line
				{...part(
					pose(
						{ y: [0, 0, -1, -1.5, 0, 0], pathLength: [1, 1, 0, 0.2, 1, 1] },
						{ duration: 0.9, times: [0, 0.2, 0.3, 0.35, 0.55, 1] },
					),
				)}
				x1="3"
				x2="21"
				y1="9"
				y2="9"
			/>
			<motion.line
				{...part(
					pose(
						{ y: [0, 0, 1, 1.5, 0, 0], pathLength: [1, 1, 0, 0.2, 1, 1] },
						{ duration: 0.9, times: [0, 0.3, 0.4, 0.45, 0.65, 1] },
					),
				)}
				x1="3"
				x2="21"
				y1="15"
				y2="15"
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.9, times: [0, 0.4, 0.5, 0.75, 1] }))}
				x1="9"
				x2="9"
				y1="9"
				y2="21"
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.9, times: [0, 0.5, 0.6, 0.85, 1] }))}
				x1="15"
				x2="15"
				y1="9"
				y2="21"
			/>
		</>
	),
});
