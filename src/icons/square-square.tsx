import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-square",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1, 0.6, 1] }, { duration: 0.7, times: [0, 0.25, 0.55, 1] }))}
				height="8"
				rx="1"
				style={centered}
				width="8"
				x="8"
				y="8"
			/>
		</>
	),
});
