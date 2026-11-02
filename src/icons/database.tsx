import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "database",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<ellipse cx="12" cy="5" rx="9" ry="3" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.95, 1] }, { duration: 0.8, times: [0, 0.5, 0.75, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M3 5V19A9 3 0 0 0 21 19V5" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 0, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M3 12A9 3 0 0 0 21 12" />
			</motion.g>
		</>
	),
});
