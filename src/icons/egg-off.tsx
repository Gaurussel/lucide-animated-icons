import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "egg-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m2 2 20 20" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -8, 5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" />
				<path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />
			</motion.g>
		</>
	),
});
