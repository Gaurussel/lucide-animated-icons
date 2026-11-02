import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "workflow",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.6, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] }))}
				height="8"
				rx="2"
				style={centered}
				width="8"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.3, 0.45, 0.75] }))}
				d="M7 11v4a2 2 0 0 0 2 2h4"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1, 0.6, 1] }, { duration: 0.85, times: [0, 0.65, 0.8, 1] }))}
				height="8"
				rx="2"
				style={centered}
				width="8"
				x="13"
				y="13"
			/>
		</>
	),
});
