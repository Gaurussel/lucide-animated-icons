import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "axis-3d",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 2.5, 0], y: [0, -2.5, 0] }, { duration: 0.7, delay: 0.2, times: [0, 0.5, 1] }))}
				d="M13.5 10.5 15 9"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.78, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M4 4v15a1 1 0 0 0 1 1h15"
				style={edge(0, 1)}
			/>
			<motion.path
				{...part(pose({ x: [0, 2.5, 0], y: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.5, 1] }))}
				d="M4.293 19.707 6 18"
			/>
			<motion.path
				{...part(pose({ x: [0, 2.5, 0], y: [0, -2.5, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.5, 1] }))}
				d="m9 15 1.5-1.5"
			/>
		</>
	),
});
