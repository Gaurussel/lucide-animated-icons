import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sandwich",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 0, -3, -3, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.4, 0.65, 0.9, 1] }))}
				d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 1, 1.1, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1] }))}
				height="4"
				rx="1"
				style={centered}
				width="20"
				x="2"
				y="11"
			/>
			<motion.g
				{...part(pose({ y: [0, 0, 1.2, 1.2, 0, 0] }, { duration: 0.8, times: [0, 0.15, 0.4, 0.65, 0.9, 1] }))}
			>
				<path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
				<path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
				<path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
			</motion.g>
		</>
	),
});
