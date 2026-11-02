import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cable",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 2, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
				<path d="M21 21v-2h-4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0.4, 0.4, 1] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"
			/>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M3 5h4V3" />
				<path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
			</motion.g>
		</>
	),
});
