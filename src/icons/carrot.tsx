import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "carrot",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -1, 2, 0], y: [0, 1, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
			<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
			<motion.path
				{...part(pose({ rotate: [0, 0, -10, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
				style={pivot(15, 9)}
			/>
			<motion.path
				{...part(pose({ rotate: [0, 0, 8, 0] }, { duration: 0.7, delay: 0.06, times: [0, 0.3, 0.65, 1] }))}
				d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
				style={pivot(15, 9)}
			/>
		</motion.g>
	),
});
