import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "separator-horizontal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 1.2, -2.2, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.85, 1] }))}
				d="m8 8 4-4 4 4"
			/>
			<motion.path
				{...part(pose({ y: [0, -1.2, 2.2, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.85, 1] }))}
				d="m16 16-4 4-4-4"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.8, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.85, 1] }))}
				d="M3 12h18"
				style={centered}
			/>
		</>
	),
});
