import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "podcast",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.4, 1], delay: 0.15 }))}
				d="M16.85 18.58a9 9 0 1 0-9.7 0"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.4, 1] }))}
				d="M8 14a5 5 0 1 1 8 0"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1.8, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				cx="12"
				cy="11"
				r="1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1.12, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"
				style={edge(0.5, 0)}
			/>
		</>
	),
});
