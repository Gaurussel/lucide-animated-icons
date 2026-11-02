import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "battery",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				d="M 22 14 L 22 10"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 1, 0.7, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.7, 1] }))}
				height="12"
				rx="2"
				style={edge(0, 0.5)}
				width="16"
				x="2"
				y="6"
			/>
		</>
	),
});
