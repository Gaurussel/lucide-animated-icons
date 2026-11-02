import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "underline",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M6 4v6a6 6 0 0 0 12 0V4"
			/>
			<motion.line
				{...part(pose({ scaleX: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.75, 1] }))}
				style={edge(0, 0.5)}
				x1="4"
				x2="20"
				y1="20"
				y2="20"
			/>
		</>
	),
});
