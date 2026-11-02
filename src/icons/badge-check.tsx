import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "badge-check",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 0.85, 0.85, 1], rotate: [0, -25, -25, 0] },
						{ duration: 0.75, times: [0, 0.3, 0.5, 1] },
					),
				)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.25, 0.45, 1] }))}
				d="m9 12 2 2 4-4"
			/>
		</>
	),
});
