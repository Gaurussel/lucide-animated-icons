import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-play",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
			<motion.path
				{...part(
					pose({ x: [0, -1, 2, 0], scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }),
				)}
				d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
				style={centered}
			/>
			<path d="M12 17v4" />
			<path d="M8 21h8" />
			<rect height="14" rx="2" width="20" x="2" y="3" />
		</motion.g>
	),
});
