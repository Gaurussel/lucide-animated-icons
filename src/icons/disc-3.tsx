import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "disc-3",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.93, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -20, 360] }, { duration: 0.8, times: [0, 0.2, 1], reset: true }))}
				style={pivot(12, 12)}
			>
				<path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
				<path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.5, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="2" />
			</motion.g>
		</>
	),
});
