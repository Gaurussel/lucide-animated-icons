import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "radio",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.6, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				cx="12"
				cy="12"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				d="M16.247 7.761a6 6 0 0 1 0 8.478"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				d="M7.753 16.239a6 6 0 0 1 0-8.478"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.15 }))}
				d="M19.075 4.933a10 10 0 0 1 0 14.134"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.15 }))}
				d="M4.925 19.067a10 10 0 0 1 0-14.134"
			/>
		</>
	),
});
