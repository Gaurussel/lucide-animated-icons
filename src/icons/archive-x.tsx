import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "archive-x",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.7, 1] }))}
				height="5"
				rx="1"
				width="20"
				x="2"
				y="3"
			/>
			<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.35, 1] }))}
				d="m9.5 17 5-5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.42, times: [0, 0.35, 1] }))}
				d="m9.5 12 5 5"
			/>
		</>
	),
});
