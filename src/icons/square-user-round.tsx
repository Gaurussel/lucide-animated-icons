import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-user-round",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.5, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M18 21a6 6 0 0 0-12 0"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ y: [0, -2, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="11"
				r="4"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
		</>
	),
});
