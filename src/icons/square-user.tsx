import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-user",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.circle
				{...part(pose({ y: [0, -2, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="10"
				r="3"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.5, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
