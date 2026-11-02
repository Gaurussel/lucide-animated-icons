import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "activity",
	render: (part) => (
		<motion.g
			{...part(pose({ scaleY: [1, 1, 1.3, 1] }, { duration: 0.8, times: [0, 0.55, 0.75, 1] }))}
			style={centered}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
			/>
		</motion.g>
	),
});
