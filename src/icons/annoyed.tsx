import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "annoyed",
	render: (part) => (
		<motion.g
			{...part(
				pose({ rotate: [0, -12, 10, 0], y: [0, -2.5, -1, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }),
			)}
			style={pivot(12, 12)}
		>
			<circle cx="12" cy="12" r="10" />
			<motion.g
				{...part(
					pose({ x: [0, -3.5, 3.5, 0], y: [0, -2, -2, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }),
				)}
			>
				<path d="M8 9h2" />
				<path d="M14 9h2" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 0.45, 0.45, 1], y: [0, 0.5, 0.5, 0] },
						{ duration: 0.85, times: [0, 0.35, 0.7, 1] },
					),
				)}
				d="M8 15h8"
				style={centered}
			/>
		</motion.g>
	),
});
