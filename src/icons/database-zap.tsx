import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "database-zap",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.85, times: [0, 0.25, 0.7, 1] }))}>
				<ellipse cx="12" cy="5" rx="9" ry="3" />
			</motion.g>
			<path d="M3 5V19A9 3 0 0 0 15 21.84" />
			<path d="M21 5V8" />
			<motion.g {...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.85] }))}>
				<path d="M21 12L18 17H22L19 22" />
			</motion.g>
			<path d="M3 12A9 3 0 0 0 14.59 14.87" />
		</>
	),
});
