import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "history",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 12, -360] }, { duration: 0.8, times: [0, 0.15, 1], reset: true }))}
				style={centered}
			>
				<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
				<path d="M3 3v5h5" />
			</motion.g>
			<motion.path
				{...part(pose({ rotate: [0, 0, -720] }, { duration: 0.8, times: [0, 0.15, 1], reset: true }))}
				d="M12 7v5l4 2"
				style={pivot(12, 12)}
			/>
		</>
	),
});
