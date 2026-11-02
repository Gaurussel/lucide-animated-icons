import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "diameter",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, 0], y: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.4, 1] }))}>
				<circle cx="19" cy="19" r="2" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1.5, 0], y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.4, 1] }))}>
				<circle cx="5" cy="5" r="2" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.94, 1] }, { duration: 0.7, times: [0, 0.5, 1] }))} style={centered}>
				<path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
				<path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 1.15, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))} style={centered}>
				<path d="m6.41 6.41 11.18 11.18" />
			</motion.g>
		</>
	),
});
