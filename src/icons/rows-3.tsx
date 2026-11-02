import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.4, 0.6, 1];

export default createAnimatedIcon({
	name: "rows-3",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0], scaleX: [1, 0.55, 0.55, 1] }, { duration: 0.7, times }))}
				d="M21 9H3"
				style={centered}
			/>
			<motion.path
				{...part(pose({ y: [0, 2.5, 2.5, 0], scaleX: [1, 0.55, 0.55, 1] }, { duration: 0.7, times }))}
				d="M21 15H3"
				style={centered}
			/>
		</>
	),
});
