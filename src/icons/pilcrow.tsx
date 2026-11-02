import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pilcrow",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.4, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				d="M13 4v16"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.4, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1], delay: 0.08 }))}
				d="M17 4v16"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] }))}
				d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"
			/>
		</>
	),
});
