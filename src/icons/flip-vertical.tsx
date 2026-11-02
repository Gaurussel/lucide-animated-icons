import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flip-vertical",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M4 12H2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.06, times: [0, 0.3, 0.5, 1] }))}
				d="M10 12H8"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.12, times: [0, 0.3, 0.5, 1] }))}
				d="M16 12h-2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.18, times: [0, 0.3, 0.5, 1] }))}
				d="M22 12h-2"
			/>
		</>
	),
});
