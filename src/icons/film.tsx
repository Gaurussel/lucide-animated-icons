import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "film",
	render: (part) => (
		<>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M7 3v18" />
				<path d="M3 7.5h4" />
				<path d="M3 16.5h4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				d="M3 12h18"
			/>
			<motion.g {...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M17 3v18" />
				<path d="M17 7.5h4" />
				<path d="M17 16.5h4" />
			</motion.g>
		</>
	),
});
