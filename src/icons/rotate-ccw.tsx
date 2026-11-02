import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rotate-ccw",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, 14, -360] }, { duration: 0.8, times: [0, 0.2, 1], reset: true }))}
			style={centered}
		>
			<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
			<motion.path
				{...part(pose({ scale: [1, 1.3, 1, 1] }, { duration: 0.8, times: [0, 0.5, 0.8, 1] }))}
				d="M3 3v5h5"
				style={centered}
			/>
		</motion.g>
	),
});
