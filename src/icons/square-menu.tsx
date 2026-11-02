import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-menu",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 0.4, 1, 1] }, { duration: 0.6, times: [0, 0.35, 0.7, 1], delay: 0.1 }))}
				d="M7 8h10"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.4, 1, 1] }, { duration: 0.6, times: [0, 0.35, 0.7, 1], delay: 0.2 }))}
				d="M7 12h10"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.4, 1, 1] }, { duration: 0.6, times: [0, 0.35, 0.7, 1], delay: 0.3 }))}
				d="M7 16h10"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
