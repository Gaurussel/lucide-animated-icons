import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "thermometer-snowflake",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scale: [1, 0.6, 1, 1], rotate: [0, -25, 0, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.6, 1] },
					),
				)}
				style={pivot(6, 12)}
			>
				<path d="m10 20-1.25-2.5L6 18" />
				<path d="M10 4 8.75 6.5 6 6" />
				<path d="M10.585 15H10" />
				<path d="M2 12h6.5L10 9" />
				<path d="m4 10 1.5 2L4 14" />
				<path d="m7 21 3-6-1.5-3" />
				<path d="m7 3 3 6h2" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.82, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
