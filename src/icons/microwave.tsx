import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "microwave",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -0.5, 0.5, -0.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}>
			<motion.rect
				{...part(pose({ opacity: [1, 0.3, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}
				height="7"
				rx="1"
				width="8"
				x="6"
				y="8"
			/>
			<rect height="15" rx="2" width="20" x="2" y="4" />
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.4, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				d="M18 8v7"
				style={edge(0.5, 0)}
			/>
			<path d="M6 19v2" />
			<path d="M18 19v2" />
		</motion.g>
	),
});
