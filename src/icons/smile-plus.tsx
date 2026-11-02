import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "smile-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M22 11v1a10 10 0 1 1-9-10"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.8, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M8 14s1.5 2 4 2 4-2 4-2"
				style={centered}
			/>
			<motion.line
				{...part(pose({ scale: [1, 0.3, 1, 1] }, { duration: 0.8, times: [0, 0.15, 0.3, 1] }))}
				style={centered}
				x1="9"
				x2="9.01"
				y1="9"
				y2="9"
			/>
			<motion.line
				{...part(pose({ scale: [1, 0.3, 1, 1] }, { duration: 0.8, times: [0, 0.15, 0.3, 1] }))}
				style={centered}
				x1="15"
				x2="15.01"
				y1="9"
				y2="9"
			/>
			<motion.g
				{...part(
					pose({ scale: [1, 0, 0, 1], rotate: [0, 0, -90, 0] }, { duration: 0.8, times: [0, 0.35, 0.4, 1] }),
				)}
				style={centered}
			>
				<path d="M16 5h6" />
				<path d="M19 2v6" />
			</motion.g>
		</>
	),
});
