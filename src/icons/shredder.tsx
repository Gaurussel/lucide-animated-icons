import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shredder",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 1.6, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				d="M10 22v-5"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 1.6, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1], delay: 0.05 }))}
				d="M14 19v-2"
				style={edge(0.5, 0)}
			/>
			<motion.g {...part(pose({ y: [0, 2.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}>
				<path d="M14 2v4a2 2 0 0 0 2 2h4" />
				<path d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 1.6, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1], delay: 0.1 }))}
				d="M18 20v-3"
				style={edge(0.5, 0)}
			/>
			<path d="M2 13h20" />
			<motion.path
				{...part(pose({ scaleY: [1, 1, 1.6, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1], delay: 0.15 }))}
				d="M6 20v-3"
				style={edge(0.5, 0)}
			/>
		</>
	),
});
