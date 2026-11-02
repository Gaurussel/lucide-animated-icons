import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bell-minus",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 12, -7, 0] }, { duration: 0.7, times: [0, 0.2, 0.45, 0.7, 1] }))}
				style={pivot(12, 2)}
			>
				<path d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.35, 1] }))}
				d="M15 8h6"
			/>
		</>
	),
});
