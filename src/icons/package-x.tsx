import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "package-x",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 0, -2, 2, 0] }, { duration: 0.85, times: [0, 0.55, 0.7, 0.85, 1] }))}>
				<motion.path
					{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
					style={edge(0.5, 1)}
				/>
				<motion.line
					{...part(pose({ scaleY: [1, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					style={edge(0.5, 1)}
					x1="12"
					x2="12"
					y1="22"
					y2="12"
				/>
				<motion.polyline
					{...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					points="3.29 7 12 12 20.71 7"
				/>
				<motion.path
					{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, times: [0, 0.35, 1], delay: 0.1 }))}
					d="m7.5 4.27 9 5.15"
				/>
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 1] }))}
					d="m17 13 5 5m-5 0 5-5"
				/>
			</motion.g>
		</>
	),
});
