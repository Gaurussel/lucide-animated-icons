import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "alarm-clock-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -13, 13, -7, 0], y: [0, -1.5, 0, -1, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.45, 0.75, 1] },
					),
				)}
				style={pivot(12, 13)}
			>
				<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
				<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
				<path d="m22 6-3-3" />
				<path d="M6.26 18.67 4 21" />
				<path d="M4 4 2 6" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.35, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
