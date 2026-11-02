import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "monitor-dot",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}>
			<motion.circle
				{...part(pose({ scale: [1, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				cx="19"
				cy="6"
				r="3"
				style={centered}
			/>
			<path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
			<path d="M12 17v4" />
			<path d="M8 21h8" />
		</motion.g>
	),
});
