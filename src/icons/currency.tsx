import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "currency",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.9, 1] }, { duration: 0.7, times: [0, 0.3, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="8" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, -1.5, 0], y: [0, -1.5, 0] }, { duration: 0.5, delay: 0.1, times: [0, 0.4, 1] }))}
			>
				<line x1="3" x2="6" y1="3" y2="6" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, 1.5, 0], y: [0, -1.5, 0] }, { duration: 0.5, delay: 0.18, times: [0, 0.4, 1] }))}
			>
				<line x1="21" x2="18" y1="3" y2="6" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, -1.5, 0], y: [0, 1.5, 0] }, { duration: 0.5, delay: 0.34, times: [0, 0.4, 1] }))}
			>
				<line x1="3" x2="6" y1="21" y2="18" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, 1.5, 0], y: [0, 1.5, 0] }, { duration: 0.5, delay: 0.26, times: [0, 0.4, 1] }))}
			>
				<line x1="21" x2="18" y1="21" y2="18" />
			</motion.g>
		</>
	),
});
