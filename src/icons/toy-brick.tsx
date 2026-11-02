import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "toy-brick",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.82, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] }))}
				height="12"
				rx="1"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="8"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 2.2, 1] }, { duration: 0.55, times: [0, 0.5, 1] }))}
				d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 2.2, 1] }, { duration: 0.55, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
