import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "roller-coaster",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.45, 1, 1] }, { duration: 1, times: [0, 0.2, 0.38, 0.58, 1] }))}
				d="M6 19V5"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.45, 1, 1] }, { duration: 1, times: [0, 0.3, 0.48, 0.68, 1] }))}
				d="M10 19V6.8"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.45, 1, 1] }, { duration: 1, times: [0, 0.4, 0.58, 0.78, 1] }))}
				d="M14 19v-7.8"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.45, 1, 1] }, { duration: 1, times: [0, 0.5, 0.68, 0.88, 1] }))}
				d="M18 5v4"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.45, 1, 1] }, { duration: 1, times: [0, 0.6, 0.78, 0.98, 1] }))}
				d="M18 19v-6"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.45, 1, 1] }, { duration: 1, times: [0, 0.7, 0.88, 1, 1.08] }))}
				d="M22 19V9"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, 0, -1.5, 0, 0], pathLength: [1, 0, 0.028, 0.444, 1, 1] },
						{ duration: 1, times: [0, 0.08, 0.1, 0.4, 0.8, 1] },
					),
				)}
				d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
			/>
		</>
	),
});
