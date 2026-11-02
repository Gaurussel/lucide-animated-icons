import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "briefcase-business",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -7, -7, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.path
				{...part(pose({ opacity: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.8] }))}
				d="M12 12h.01"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.9] }))}
				d="M22 13a18.15 18.15 0 0 1-20 0"
			/>
			<rect height="14" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
