import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.35, 0.7, 1];

export default createAnimatedIcon({
	name: "whole-word",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 1, 0] }, { duration: 0.8, times }))}>
				<circle cx="7" cy="12" r="3" />
				<path d="M10 9v6" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1.5, -1, 0] }, { duration: 0.8, times }))}>
				<circle cx="17" cy="12" r="3" />
				<path d="M14 7v8" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 1.08, 0.9, 1] }, { duration: 0.8, times }))}
				d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
				style={centered}
			/>
		</>
	),
});
