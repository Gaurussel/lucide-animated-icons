import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "citrus",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
				<path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="m14 10-5.5 5.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.5, 1] }))}
				d="M14 17.85V10H6.15"
			/>
		</>
	),
});
