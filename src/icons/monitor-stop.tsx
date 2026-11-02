import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-stop",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
			<motion.rect
				{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="6"
				x="9"
				y="7"
			/>
			<path d="M12 17v4" />
			<path d="M8 21h8" />
			<rect height="14" rx="2" width="20" x="2" y="3" />
		</motion.g>
	),
});
