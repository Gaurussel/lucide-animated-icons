import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "text-search",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.6, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M21 6H3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M10 12H3"
			/>
			<path d="M10 18H3" />
			<motion.g
				{...part(pose({ x: [0, -3, -3, 0], y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
			>
				<circle cx="17" cy="15" r="3" />
				<path d="m21 19-1.9-1.9" />
			</motion.g>
		</>
	),
});
