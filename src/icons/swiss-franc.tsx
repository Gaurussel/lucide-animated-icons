import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "swiss-franc",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.8, 1, 1], x: [0, -1, 0, 0] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }),
				)}
				d="M10 21V3h8"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.45, 1] }))}
				d="M6 16h9"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.25, times: [0, 0.25, 0.45, 1] }))}
				d="M10 9.5h7"
			/>
		</>
	),
});
