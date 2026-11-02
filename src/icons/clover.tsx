import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clover",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0.3, 1, 1] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}
				d="M16.17 7.83 2 22"
			/>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -16, 0, 0], scale: [1, 0.94, 1, 1] },
						{ duration: 0.8, times: [0, 0.35, 0.7, 1] },
					),
				)}
				d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
				style={pivot(12, 12)}
			/>
			<path d="m7.83 7.83 8.34 8.34" />
		</>
	),
});
