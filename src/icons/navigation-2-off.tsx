import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "navigation-2-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ opacity: [1, 0.35, 0.35, 1], rotate: [0, -8, -8, 0] },
						{ duration: 0.8, times: [0, 0.5, 0.75, 1] },
					),
				)}
				style={pivot(12, 12)}
			>
				<path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
				<path d="M14.53 8.88 12 2l-1.17 3.17" />
			</motion.g>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
		</>
	),
});
