import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "vote",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 1] }))}
				d="m9 12 2 2 4-4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.8, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.5, times: [0, 0.4, 1] }))}
				d="M22 19H2"
				style={centered}
			/>
		</>
	),
});
