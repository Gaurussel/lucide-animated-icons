import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rotate-ccw-key",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -28, 0, 0] }, { duration: 1, times: [0, 0.6, 0.78, 0.92, 1] }))}
				style={pivot(10, 14)}
			>
				<path d="m14.5 9.5 1 1" />
				<path d="m15.5 8.5-4 4" />
				<circle cx="10" cy="14" r="2" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, 12, -360, 0] }, { duration: 1, times: [0, 0.12, 0.65, 1], reset: true }))}
				style={centered}
			>
				<path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
				<path d="M3 3v5h5" />
			</motion.g>
		</>
	),
});
