import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-dot",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 1, 2, 1] }, { duration: 0.7, times: [0, 0.35, 0.65, 1] }))}
				cx="12"
				cy="12"
				r="1"
				style={centered}
			/>
		</>
	),
});
