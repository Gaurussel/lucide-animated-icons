import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-stack",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -2, -2, 0], y: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.85, 0.85, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
				style={centered}
			/>
			<motion.rect
				{...part(pose({ x: [0, 2, 2, 0], y: [0, 2, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				height="8"
				rx="2"
				width="8"
				x="14"
				y="14"
			/>
		</>
	),
});
