import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sprout",
	render: (part) => (
		<>
			<path d="M7 20h10" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.2, 0.6, 1] }))}
				d="M10 20c5.5-2.5.8-6.4 3-10"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.55, 0.85, 1] }))}
				d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.65, 0.95, 1] }))}
				d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
				style={centered}
			/>
		</>
	),
});
