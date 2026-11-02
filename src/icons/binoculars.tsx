import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "binoculars",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 1.5, 0] }, { duration: 0.9, times: [0, 0.3, 0.7, 1] }))}>
				<motion.path
					{...part(pose({ scaleX: [1, 0.5, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
					d="M10 10h4"
					style={centered}
				/>
				<motion.path
					{...part(pose({ y: [0, -1.2, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
					d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"
				/>
				<path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
				<path d="M 22 16 L 2 16" />
				<path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
				<motion.path
					{...part(pose({ y: [0, -1.2, 0, 0] }, { duration: 0.9, delay: 0.05, times: [0, 0.3, 0.6, 1] }))}
					d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"
				/>
			</motion.g>
		</>
	),
});
