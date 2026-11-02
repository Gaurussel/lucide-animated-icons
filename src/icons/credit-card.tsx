import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "credit-card",
	render: (part) => (
		<motion.g
			{...part(pose({ x: [0, -2, 2, 0], rotate: [0, -4, 3, 0] }, { duration: 0.75, times: [0, 0.3, 0.7, 1] }))}
			style={centered}
		>
			<rect height="14" rx="2" width="20" x="2" y="5" />
			<motion.line
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				x1="2"
				x2="22"
				y1="10"
				y2="10"
			/>
		</motion.g>
	),
});
