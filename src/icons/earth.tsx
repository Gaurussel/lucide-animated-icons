import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "earth",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, 0] }, { duration: 0.7, delay: 0.2, times: [0, 0.4, 1] }))}>
				<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -2, 0] }, { duration: 0.7, times: [0, 0.4, 1] }))}>
				<path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 2, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.4, 1] }))}>
				<path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.94, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
		</>
	),
});
