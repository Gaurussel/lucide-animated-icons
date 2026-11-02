import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "briefcase",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -7, -7, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.88, 0.88, 1] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				height="14"
				rx="2"
				style={edge(0.5, 1)}
				width="20"
				x="2"
				y="6"
			/>
		</motion.g>
	),
});
