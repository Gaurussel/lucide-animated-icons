import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.3, 0.55, 0.8, 1] };

export default createAnimatedIcon({
	name: "hard-hat",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -3, -3, 0, 0], rotate: [0, -6, -6, 0, 0] }, phase))} style={centered}>
				<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
				<path d="M14 6a6 6 0 0 1 6 6v3" />
				<path d="M4 15v-3a6 6 0 0 1 6-6" />
			</motion.g>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 1, 0.8, 1] }, phase))}
				height="4"
				rx="1"
				style={edge(0.5, 0)}
				width="20"
				x="2"
				y="15"
			/>
		</>
	),
});
