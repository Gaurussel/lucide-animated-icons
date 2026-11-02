import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "star-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -12, 360] }, { duration: 0.8, times: [0, 0.2, 1], reset: true }))}
				style={pivot(12, 12.5)}
			>
				<path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" />
				<path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" />
			</motion.g>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
		</>
	),
});
