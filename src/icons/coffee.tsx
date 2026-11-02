import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "coffee",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.4, 0.45, 1] }),
				)}
				d="M6 2v2"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.1, times: [0, 0.4, 0.45, 1] },
					),
				)}
				d="M10 2v2"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.2, times: [0, 0.4, 0.45, 1] },
					),
				)}
				d="M14 2v2"
			/>
			<motion.path
				{...part(pose({ rotate: [0, -6, -6, 0] }, { duration: 0.85, times: [0, 0.25, 0.55, 1] }))}
				d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
				style={pivot(10, 21)}
			/>
		</>
	),
});
