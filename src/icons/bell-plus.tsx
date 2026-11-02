import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bell-plus",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 12, -7, 0] }, { duration: 0.7, times: [0, 0.2, 0.45, 0.7, 1] }))}
				style={pivot(12, 2)}
			>
				<path d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.35, 1] }))}
				d="M15 8h6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.2, 0.35, 1] }))}
				d="M18 5v6"
			/>
		</>
	),
});
