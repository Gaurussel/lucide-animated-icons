import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "focus",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.6, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.4, 1] }))}
				cx="12"
				cy="12"
				r="3"
				style={centered}
			/>
			<motion.g
				{...part(pose({ scale: [1, 1.12, 0.86, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				style={centered}
			>
				<path d="M3 7V5a2 2 0 0 1 2-2h2" />
				<path d="M17 3h2a2 2 0 0 1 2 2v2" />
				<path d="M21 17v2a2 2 0 0 1-2 2h-2" />
				<path d="M7 21H5a2 2 0 0 1-2-2v-2" />
			</motion.g>
		</>
	),
});
