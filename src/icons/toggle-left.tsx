import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "toggle-left",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ x: [0, -1, 6, 6, 0] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.7, 1] }))}
				cx="9"
				cy="12"
				r="3"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.92, 0.92, 1] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.7, 1] }))}
				height="14"
				rx="7"
				style={centered}
				width="20"
				x="2"
				y="5"
			/>
		</>
	),
});
