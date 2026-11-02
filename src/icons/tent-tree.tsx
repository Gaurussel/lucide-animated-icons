import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tent-tree",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, -4, 0, 0], x: [0, 2, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="4"
				cy="4"
				r="2"
			/>
			<motion.g
				{...part(pose({ rotate: [0, -16, 11, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(17, 14)}
			>
				<path d="m14 5 3-3 3 3" />
				<path d="m14 10 3-3 3 3" />
				<path d="M17 14V2" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.82, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M17 14H7l-5 8h20Z"
				style={edge(0.5, 1)}
			/>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<path d="M8 14v8" />
				<path d="m9 14 5 8" />
			</motion.g>
		</>
	),
});
