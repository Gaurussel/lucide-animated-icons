import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tablet",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={centered}
		>
			<rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
			<motion.line
				{...part(pose({ opacity: [1, 1, 0.1, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				x1="12"
				x2="12.01"
				y1="18"
				y2="18"
			/>
		</motion.g>
	),
});
