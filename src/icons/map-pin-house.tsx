import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "map-pin-house",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}>
				<path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
				<motion.circle
					{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.5, 0.7, 1] }))}
					cx="10"
					cy="10"
					r="3"
					style={centered}
				/>
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.85, 1] }, { duration: 0.8, times: [0, 0.45, 0.65, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.65, 1] }))}
					d="M18 22v-3"
				/>
			</motion.g>
		</>
	),
});
