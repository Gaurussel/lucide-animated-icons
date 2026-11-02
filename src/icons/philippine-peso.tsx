import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "philippine-peso",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1], delay: 0.1 }))}
				d="M20 11H4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M20 7H4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
