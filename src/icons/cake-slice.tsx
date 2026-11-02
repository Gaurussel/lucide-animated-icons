import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cake-slice",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.65, 1] }))}
			style={pivot(12, 21)}
		>
			<motion.circle
				{...part(pose({ y: [0, -3.5, 0] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				cx="9"
				cy="7"
				r="2"
			/>
			<path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.15, times: [0, 0.2, 0.45, 1] }))}
				d="M16 13H3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.25, times: [0, 0.2, 0.45, 1] }))}
				d="M16 17H3"
			/>
		</motion.g>
	),
});
