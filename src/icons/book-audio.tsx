import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-audio",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.path
				{...part(pose({ scaleY: [1, 0.35, 1] }, { duration: 0.5, delay: 0.18, times: [0, 0.5, 1] }))}
				d="M12 6v7"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.35, 1] }, { duration: 0.5, delay: 0.26, times: [0, 0.5, 1] }))}
				d="M16 8v3"
				style={centered}
			/>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.35, 1] }, { duration: 0.5, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M8 8v3"
				style={centered}
			/>
		</motion.g>
	),
});
