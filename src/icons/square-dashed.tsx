import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-dashed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M5 21a2 2 0 0 1-2-2" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M9 3h1" />
				<path d="M14 3h1" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M9 21h1" />
				<path d="M14 21h1" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M3 9v1" />
				<path d="M3 14v1" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -1, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M21 9v1" />
				<path d="M21 14v1" />
			</motion.g>
		</>
	),
});
