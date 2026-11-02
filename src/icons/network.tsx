import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "network",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 1.4, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="6"
				x="9"
				y="2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.1, 0.3, 0.55] }))}
				d="M12 12V8"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.1, 0.4, 0.7] }))}
				d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.85, times: [0, 0.55, 0.75, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="6"
				x="16"
				y="16"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.85, times: [0, 0.55, 0.75, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="6"
				x="2"
				y="16"
			/>
		</>
	),
});
