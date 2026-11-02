import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fire-extinguisher",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, 0, -0.8, 0.8, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.7, 1] }))}>
			<motion.g {...part(pose({ y: [0, 0, 2.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}>
				<path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
				<path d="M18 3h-3" />
			</motion.g>
			<path d="M9 18h8" />
			<motion.g {...part(pose({ x: [0, 0, -1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.7, 1] }))}>
				<path d="M11 3a6 6 0 0 0-6 6v11" />
				<path d="M5 13h4" />
			</motion.g>
			<path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
		</motion.g>
	),
});
