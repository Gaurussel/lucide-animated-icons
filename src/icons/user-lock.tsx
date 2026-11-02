import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-lock",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="7"
				r="4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M10.3 15H7a4 4 0 0 0-4 4v2"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -1.6, -1.6, 0] }, { duration: 0.8, times: [0, 0.35, 0.55, 0.7, 1] }))}
				d="M15 15.5V14a2 2 0 0 1 4 0v1.5"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.7, 0.85, 1] }))}
				height="5"
				rx=".899"
				style={edge(0.5, 1)}
				width="8"
				x="13"
				y="16"
			/>
		</>
	),
});
