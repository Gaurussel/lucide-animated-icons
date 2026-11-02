import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "move-horizontal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="m18 8 4 4-4 4"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="m6 8-4 4 4 4"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.85, 1.2, 1] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
				d="M2 12h20"
				style={centered}
			/>
		</>
	),
});
