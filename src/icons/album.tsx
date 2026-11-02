import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "album",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.85, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				height="18"
				rx="2"
				ry="2"
				style={edge(0, 0.5)}
				width="18"
				x="3"
				y="3"
			/>
			<motion.polyline
				{...part(pose({ y: [0, 4.5, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.45, 1] }))}
				points="11 3 11 11 14 8 17 11 17 3"
			/>
		</>
	),
});
