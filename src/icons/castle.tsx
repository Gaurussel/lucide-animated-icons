import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "castle",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.9, 0.9, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.8, 0.8, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M18 11V4H6v7"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.1, 0.1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(pose({ y: [0, 0, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M22 11V9" />
				<path d="M2 11V9" />
			</motion.g>
			<motion.path {...part(pose({ y: [0, 0, -3, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))} d="M6 4V2" />
			<motion.path
				{...part(pose({ y: [0, 0, -3, 0] }, { duration: 0.7, delay: 0.18, times: [0, 0.3, 0.6, 1] }))}
				d="M18 4V2"
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -3, 0] }, { duration: 0.7, delay: 0.06, times: [0, 0.3, 0.6, 1] }))}
				d="M10 4V2"
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -3, 0] }, { duration: 0.7, delay: 0.12, times: [0, 0.3, 0.6, 1] }))}
				d="M14 4V2"
			/>
		</>
	),
});
