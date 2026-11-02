import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-library",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M7 7v10"
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1], delay: 0.1 }))}
				d="M11 7v10"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -1.5, 0, 0], rotate: [0, -8, 0, 0] },
						{ duration: 0.7, times: [0, 0.3, 0.6, 1], delay: 0.2 },
					),
				)}
				d="m15 7 2 10"
				style={pivot(17, 17)}
			/>
		</>
	),
});
