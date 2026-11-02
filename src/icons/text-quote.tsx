import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "text-quote",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.45, 1] }))}
				d="M17 6H3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.2, times: [0, 0.25, 0.45, 1] }))}
				d="M21 12H8"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.3, times: [0, 0.25, 0.45, 1] }))}
				d="M21 18H8"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.45, 1] }))}
				d="M3 12v6"
			/>
		</>
	),
});
