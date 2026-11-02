import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-percent",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.05 }))}
				d="m15 9-6 6"
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 2, 1] }, { duration: 0.7, times: [0, 0.4, 0.6, 1] }))}
				d="M9 9h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 1, 2, 1] }, { duration: 0.7, times: [0, 0.4, 0.55, 0.75, 1] }))}
				d="M15 15h.01"
				style={centered}
			/>
		</>
	),
});
