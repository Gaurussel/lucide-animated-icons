import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-terminal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.3, 0.6] }))}
				d="m7 11 2-2-2-2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.4, 0.55, 1] }))}
				d="M11 13h4"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
		</>
	),
});
