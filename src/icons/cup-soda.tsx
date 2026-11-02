import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cup-soda",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.92, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
				<path d="M5 8h14" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 0, 3, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -3, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}>
				<path d="m12 8 1-6h2" />
			</motion.g>
		</>
	),
});
