import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-x",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.55, delay: 0.15, times: [0, 0.25, 0.45, 1] }),
				)}
				d="m15 9-6 6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.55, times: [0, 0.25, 0.45, 1] }))}
				d="m9 9 6 6"
			/>
		</>
	),
});
