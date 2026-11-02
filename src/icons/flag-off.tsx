import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flag-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 5, -3, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(4, 22)}
			>
				<path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
				<path d="M4 22V4" />
				<path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
