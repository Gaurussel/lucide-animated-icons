import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-lock",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.path
				{...part(
					pose({ y: [0, -1, -1, 0], rotate: [0, 30, 30, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }),
				)}
				d="M18 6V4a2 2 0 1 0-4 0v2"
				style={pivot(18, 6)}
			/>
			<path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
			<motion.rect
				{...part(pose({ scaleY: [1, 0.85, 0.85, 1] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				height="5"
				rx="1"
				style={edge(0.5, 1)}
				width="8"
				x="12"
				y="6"
			/>
		</motion.g>
	),
});
