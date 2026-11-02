import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "briefcase-medical",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -7, -7, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.25, 0.5, 1] }))}
				d="M12 11v4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.18, times: [0, 0.25, 0.5, 1] }))}
				d="M14 13h-4"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
			/>
			<motion.g
				{...part(pose({ scaleY: [1, 0.8, 0.8, 1] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={centered}
			>
				<path d="M18 6v14" />
				<path d="M6 6v14" />
			</motion.g>
			<rect height="14" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
