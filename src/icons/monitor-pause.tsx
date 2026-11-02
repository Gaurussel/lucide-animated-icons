import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-pause",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.35, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M10 13V7"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.35, 1] }, { duration: 0.8, times: [0, 0.45, 0.7, 1] }))}
				d="M14 13V7"
				style={centered}
			/>
			<rect height="14" rx="2" width="20" x="2" y="3" />
			<path d="M12 17v4" />
			<path d="M8 21h8" />
		</motion.g>
	),
});
