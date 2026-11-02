import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "badge-percent",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.35, 1] }))}
				d="m15 9-6 6"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.2, 0.35, 1] }))}
				d="M9 9h.01"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.2, times: [0, 0.2, 0.35, 1] }))}
				d="M15 15h.01"
			/>
		</>
	),
});
