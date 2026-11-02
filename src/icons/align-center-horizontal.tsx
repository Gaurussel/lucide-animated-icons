import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-center-horizontal",
	render: (part) => (
		<>
			<path d="M2 12h20" />
			<motion.path
				{...part(pose({ y: [0, -2, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
			/>
			<motion.path
				{...part(pose({ y: [0, 2, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, 0] }, { duration: 0.7, delay: 0.12, times: [0, 0.45, 1] }))}
				d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, 0] }, { duration: 0.7, delay: 0.12, times: [0, 0.45, 1] }))}
				d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
			/>
		</>
	),
});
