import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tally-3",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, times: [0, 0.25, 0.45, 1] }))}
				d="M4 4v16"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay: 0.12, times: [0, 0.25, 0.45, 1] }))}
				d="M9 4v16"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay: 0.24, times: [0, 0.25, 0.45, 1] }))}
				d="M14 4v16"
			/>
		</>
	),
});
