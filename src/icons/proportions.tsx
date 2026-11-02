import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "proportions",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.8, 0.8, 1] }, { duration: 0.9, times: [0, 0.35, 0.6, 1] }))}
				height="16"
				rx="2"
				style={edge(0, 0.5)}
				width="20"
				x="2"
				y="4"
			/>
			<motion.g
				{...part(pose({ scaleX: [1, 0.8, 0.8, 1] }, { duration: 0.9, times: [0, 0.35, 0.6, 1] }))}
				style={pivot(2, 20)}
			>
				<path d="M12 9v11" />
				<path d="M2 9h13a2 2 0 0 1 2 2v9" />
			</motion.g>
		</>
	),
});
