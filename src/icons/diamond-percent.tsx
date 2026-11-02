import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "diamond-percent",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				style={centered}
			>
				<path d="M9.2 9.2h.01" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}>
				<path d="m14.5 9.5-5 5" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.6, 1] }))}
				style={centered}
			>
				<path d="M14.7 14.8h.01" />
			</motion.g>
		</>
	),
});
