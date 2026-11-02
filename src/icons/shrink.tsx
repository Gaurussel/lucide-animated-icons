import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shrink",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 1, -2, 0], y: [0, 1, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}
			>
				<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, -1, 2, 0], y: [0, 1, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}
			>
				<path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, 1, -2, 0], y: [0, -1, 2, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}
			>
				<path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, -1, 2, 0], y: [0, -1, 2, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}
			>
				<path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
			</motion.g>
		</>
	),
});
