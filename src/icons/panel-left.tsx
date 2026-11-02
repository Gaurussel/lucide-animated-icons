import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "panel-left",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.92, 0.92, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ x: [0, -5, -5, 0] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				d="M9 3v18"
			/>
		</>
	),
});
