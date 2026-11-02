import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dam",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 3, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.4, 1] }))}>
				<path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 3, 0] }, { duration: 0.6, delay: 0.2, times: [0, 0.4, 1] }))}>
				<path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 3, 0] }, { duration: 0.6, times: [0, 0.4, 1] }))}>
				<path d="M2 10h4" />
				<path d="M2 14h4" />
				<path d="M2 18h4" />
				<path d="M2 6h4" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleX: [1, 0.9, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" />
			</motion.g>
		</>
	),
});
