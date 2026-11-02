import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "panel-right-dashed",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.94, 0.94, 1] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ x: [0, -3, -3, 0] }, { duration: 0.7, times: [0, 0.4, 0.6, 1] }))}
				d="M15 3v2"
			/>
			<motion.path
				{...part(pose({ x: [0, -3, -3, 0] }, { duration: 0.7, times: [0, 0.4, 0.6, 1], delay: 0.05 }))}
				d="M15 9v1"
			/>
			<motion.path
				{...part(pose({ x: [0, -3, -3, 0] }, { duration: 0.7, times: [0, 0.4, 0.6, 1], delay: 0.1 }))}
				d="M15 14v1"
			/>
			<motion.path
				{...part(
					pose({ x: [0, -3, -3, 0] }, { duration: 0.7, times: [0, 0.4, 0.6, 1], delay: 0.15000000000000002 }),
				)}
				d="M15 19v2"
			/>
		</>
	),
});
