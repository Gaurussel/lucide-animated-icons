import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const line = (delay: number) => pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.45, 1] });

export default createAnimatedIcon({
	name: "id-card",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -6, -6, 0], y: [0, -1, -1, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
			style={centered}
		>
			<motion.path {...part(line(0))} d="M16 10h2" />
			<motion.path {...part(line(0.1))} d="M16 14h2" />
			<path d="M6.17 15a3 3 0 0 1 5.66 0" />
			<motion.circle
				{...part(pose({ scale: [1, 0.6, 1.0, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="9"
				cy="11"
				r="2"
				style={centered}
			/>
			<rect height="14" rx="2" width="20" x="2" y="5" />
		</motion.g>
	),
});
