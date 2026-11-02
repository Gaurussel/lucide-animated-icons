import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-lock",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(3, 21)}
		>
			<path d="M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" />
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				d="M19 15v-2a2 2 0 1 0-4 0v2"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.85, 1] }, { duration: 0.8, times: [0, 0.55, 0.75, 1] }))}
				height="5"
				rx="1"
				style={edge(0.5, 1)}
				width="8"
				x="13"
				y="15"
			/>
		</motion.g>
	),
});
