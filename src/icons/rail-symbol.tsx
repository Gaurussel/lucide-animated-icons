import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rail-symbol",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				d="M5 15h14"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1], delay: 0.08 }))}
				d="M5 9h14"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="m14 20-5-5 6-6-5-5"
			/>
		</>
	),
});
