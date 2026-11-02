import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bell-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 12, -7, 0] }, { duration: 0.7, times: [0, 0.2, 0.45, 0.7, 1] }))}
				style={pivot(12, 2)}
			>
				<path d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
				<path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.7, times: [0, 0.35, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
