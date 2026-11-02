import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pi",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.25, 0.4, 1] }))}
				x1="9"
				x2="9"
				y1="4"
				y2="20"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.25, 0.4, 1], delay: 0.12 }))}
				d="M4 7c0-1.7 1.3-3 3-3h13"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.25, 0.4, 1], delay: 0.24 }))}
				d="M18 20c-1.7 0-3-1.3-3-3V4"
			/>
		</>
	),
});
