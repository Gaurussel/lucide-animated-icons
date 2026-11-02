import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clipboard-x",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ y: [0, -4.5, -4.5, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.4, 0.65, 1] }))}
				height="4"
				rx="1"
				ry="1"
				width="8"
				x="8"
				y="2"
			/>
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				d="m15 11-6 6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.2, 0.5, 1] }))}
				d="m9 11 6 6"
			/>
		</>
	),
});
