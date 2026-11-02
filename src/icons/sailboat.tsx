import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sailboat",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, 0.6, -0.6, 0.3, 0], rotate: [0, -5, 5, -2, 0] },
						{ duration: 0.9, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				style={pivot(12, 20)}
			>
				<motion.path
					{...part(pose({ scaleX: [1, 1, 1.08, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M21 14 10 2 3 14h18Z"
					style={edge(0.2, 1)}
				/>
				<path d="M10 2v16" />
				<path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
			</motion.g>
		</>
	),
});
