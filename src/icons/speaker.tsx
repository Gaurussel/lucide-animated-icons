import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "speaker",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.9, 1, 0.93, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }))}
				style={centered}
			>
				<rect height="20" rx="2" width="16" x="4" y="2" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1, 0, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }))}>
				<path d="M12 6h.01" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.6, 1, 0.7, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }))}
				style={centered}
			>
				<circle cx="12" cy="14" r="4" />
				<path d="M12 14h.01" />
			</motion.g>
		</>
	),
});
