import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "radio-tower",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.4, 1], delay: 0.15 }))}
				d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.4, 1] }))}
				d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1.6, 1, 1] }, { duration: 0.75, times: [0, 0.2, 0.4, 1] }))}
				cx="12"
				cy="9"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.4, 1] }))}
				d="M16.2 4.8c2 2 2.26 5.11.8 7.47"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.4, 1], delay: 0.15 }))}
				d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
			/>
			<path d="M9.5 18h5" />
			<path d="m8 22 4-11 4 11" />
		</>
	),
});
