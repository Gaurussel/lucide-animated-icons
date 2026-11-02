import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "drumstick",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(6, 18)}
			>
				<motion.g
					{...part(pose({ scale: [1, 1, 0.88, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
					style={centered}
				>
					<path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" />
				</motion.g>
				<path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" />
			</motion.g>
		</>
	),
});
