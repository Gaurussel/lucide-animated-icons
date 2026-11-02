import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-user",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.path
				{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				d="M15 13a3 3 0 1 0-6 0"
				style={edge(0.5, 1)}
			/>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<motion.circle
				{...part(pose({ y: [0, 1, -1.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.55, 1] }))}
				cx="12"
				cy="8"
				r="2"
			/>
		</motion.g>
	),
});
