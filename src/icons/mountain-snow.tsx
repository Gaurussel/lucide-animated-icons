import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mountain-snow",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scaleY: [1, 0.84, 1.16, 1], scaleX: [1, 1.05, 0.95, 1] },
						{ duration: 0.7, times: [0, 0.25, 0.6, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.45, 1] }))}
					d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
				/>
			</motion.g>
		</>
	),
});
