import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "vector-square",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay: 0.2, times: [0, 0.5, 1] }))}
				d="M19.5 7a24 24 0 0 1 0 10"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay: 0.4, times: [0, 0.5, 1] }))}
				d="M4.5 7a24 24 0 0 0 0 10"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay: 0.3, times: [0, 0.5, 1] }))}
				d="M7 19.5a24 24 0 0 0 10 0"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M7 4.5a24 24 0 0 1 10 0"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1.9, 1] }, { duration: 0.35, delay: 0.2, times: [0, 0.5, 1] }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="17"
				y="17"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1.9, 1] }, { duration: 0.35, delay: 0.1, times: [0, 0.5, 1] }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="17"
				y="2"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1.9, 1] }, { duration: 0.35, delay: 0.3, times: [0, 0.5, 1] }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="2"
				y="17"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1.9, 1] }, { duration: 0.35, times: [0, 0.5, 1] }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="2"
				y="2"
			/>
		</>
	),
});
