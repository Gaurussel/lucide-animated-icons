import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rainbow",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.6, 1, 1] }))}
				d="M22 17a10 10 0 0 0-20 0"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.45, 0.8, 1] }))}
				d="M6 17a6 6 0 0 1 12 0"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.3, 0.6, 1] }))}
				d="M10 17a2 2 0 0 1 4 0"
			/>
		</>
	),
});
