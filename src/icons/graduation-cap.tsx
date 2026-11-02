import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "graduation-cap",
	render: (part) => (
		<motion.g
			{...part(pose({ y: [0, 1, -3, 0], rotate: [0, 0, -8, 0] }, { duration: 0.85, times: [0, 0.2, 0.6, 1] }))}
			style={centered}
		>
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
			<motion.path
				{...part(pose({ rotate: [0, 0, 14, -8, 0] }, { duration: 0.85, times: [0, 0.3, 0.6, 0.8, 1] }))}
				d="M22 10v6"
				style={pivot(22, 10)}
			/>
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
		</motion.g>
	),
});
