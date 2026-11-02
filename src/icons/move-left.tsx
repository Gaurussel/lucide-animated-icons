import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-left",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="M6 8L2 12L6 16"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.925, 1.1, 1] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="M2 12H22"
				style={edge(1, 0.5)}
			/>
		</>
	),
});
