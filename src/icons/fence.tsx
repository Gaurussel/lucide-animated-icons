import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fence",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -3.5, -3.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
			/>
			<motion.g
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.25, 0.4, 1] }))}
			>
				<path d="M6 8h4" />
				<path d="M14 8h4" />
			</motion.g>
			<motion.g
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.2, times: [0, 0.25, 0.4, 1] }))}
			>
				<path d="M6 18h4" />
				<path d="M14 18h4" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -3.5, -3.5, 0] }, { duration: 0.7, delay: 0.08, times: [0, 0.25, 0.5, 1] }))}
				d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
			/>
			<motion.path
				{...part(pose({ y: [0, -3.5, -3.5, 0] }, { duration: 0.7, delay: 0.16, times: [0, 0.25, 0.5, 1] }))}
				d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
			/>
		</>
	),
});
