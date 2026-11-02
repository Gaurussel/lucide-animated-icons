import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "magnet",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(12, 12)}
		>
			<path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
			<motion.path
				{...part(pose({ scaleX: [1, 0.3, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.3 }))}
				d="m5 8 4 4"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.3, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.4 }))}
				d="m12 15 4 4"
				style={centered}
			/>
		</motion.g>
	),
});
