import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				height="14"
				rx="2"
				width="20"
				x="2"
				y="3"
			/>
			<motion.line
				{...part(pose({ scaleY: [1, 1.6, 1.6, 1] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				style={edge(0.5, 1)}
				x1="12"
				x2="12"
				y1="17"
				y2="21"
			/>
			<line x1="8" x2="16" y1="21" y2="21" />
		</>
	),
});
