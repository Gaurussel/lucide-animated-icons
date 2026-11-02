import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rotate-cw",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.8, times: [0, 0.2, 1], reset: true }))}
			style={centered}
		>
			<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
			<motion.path
				{...part(pose({ scale: [1, 1.3, 1, 1] }, { duration: 0.8, times: [0, 0.5, 0.8, 1] }))}
				d="M21 3v5h-5"
				style={centered}
			/>
		</motion.g>
	),
});
