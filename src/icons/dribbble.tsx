import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dribbble",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.85, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, times: [0, 0.4, 1] }))}>
				<path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, delay: 0.1, times: [0, 0.4, 1] }))}>
				<path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, delay: 0.2, times: [0, 0.4, 1] }))}>
				<path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
			</motion.g>
		</>
	),
});
