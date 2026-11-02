import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "usb",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 2.4, 1] }, { duration: 0.3, delay: 0.3, times: [0, 0.5, 1] }))}
				cx="10"
				cy="7"
				r="1"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 2.4, 1] }, { duration: 0.3, times: [0, 0.5, 1] }))}
				cx="4"
				cy="20"
				r="1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.3, 1] }, { duration: 0.5, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M4.7 19.3 19 5"
			/>
			<motion.path
				{...part(pose({ x: [0, 2, 0], y: [0, -2, 0] }, { duration: 0.4, delay: 0.3, times: [0, 0.5, 1] }))}
				d="m21 3-3 1 2 2Z"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.4, 1] }, { duration: 0.5, delay: 0.35, times: [0, 0.5, 1] }))}
				d="M9.26 7.68 5 12l2 5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.4, 1] }, { duration: 0.5, delay: 0.35, times: [0, 0.5, 1] }))}
				d="m10 14 5 2 3.5-3.5"
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.2, 1] }, { duration: 0.3, delay: 0.5, times: [0, 0.5, 1] }))}
				d="m18 12 1-1 1 1-1 1Z"
				style={centered}
			/>
		</>
	),
});
