import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "regex",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -12, 360] }, { duration: 0.85, times: [0, 0.15, 1], reset: true }))}
				style={pivot(17, 8)}
			>
				<path d="M17 3v10" />
				<path d="m12.67 5.5 8.66 5" />
				<path d="m12.67 10.5 8.66-5" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 1.3, 1, 1] }, { duration: 0.85, times: [0, 0.5, 0.7, 0.9, 1] }))}
				d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
				style={centered}
			/>
		</>
	),
});
