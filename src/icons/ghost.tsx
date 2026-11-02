import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ghost",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2.5, -2.5, 0], rotate: [0, -6, 6, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] }),
			)}
			style={centered}
		>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.45, 0.6, 1] }))}
				d="M9 10h.01"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.45, 0.6, 1] }))}
				d="M15 10h.01"
			/>
			<path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
		</motion.g>
	),
});
