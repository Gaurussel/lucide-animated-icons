import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "navigation-off",
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
				<path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
				<path d="M17.39 11.73 22 2l-9.73 4.61" />
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
