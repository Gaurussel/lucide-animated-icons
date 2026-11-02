import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "memory-stick",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1] }))}
				d="M8 11V9"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.07 }))}
				d="M12 11V9"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.14 }))}
				d="M16 11V9"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.55, 0.75, 1] }))}
				d="M6 19v-3"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.5800000000000001, 0.78, 1] }))}
				d="M10 19v-3"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.6100000000000001, 0.81, 1] }))}
				d="M14 19v-3"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.64, 0.84, 1] }))}
				d="M18 19v-3"
				style={edge(0.5, 0)}
			/>
			<path d="M2 15h20" />
			<path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" />
		</motion.g>
	),
});
