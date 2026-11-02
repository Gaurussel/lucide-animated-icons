import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "app-window-mac",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.85, 1] }, { duration: 0.75, times: [0, 0.4, 1] }))}
				height="16"
				rx="2"
				style={edge(0.5, 0)}
				width="20"
				x="2"
				y="4"
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.4, 1] }, { duration: 0.35, delay: 0.1, times: [0, 0.4, 1] }))}
				d="M6 8h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.4, 1] }, { duration: 0.35, delay: 0.22, times: [0, 0.4, 1] }))}
				d="M10 8h.01"
				style={centered}
			/>
			<motion.path
				{...part(
					pose({ scale: [1, 2.4, 1] }, { duration: 0.35, delay: 0.33999999999999997, times: [0, 0.4, 1] }),
				)}
				d="M14 8h.01"
				style={centered}
			/>
		</>
	),
});
