import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pill-bottle",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 0, -1, 1, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.45, 0.55, 0.65, 1] }))}
			>
				<path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
				<path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
			</motion.g>
			<motion.rect
				{...part(
					pose({ y: [0, -3, -3, 0], rotate: [0, -10, -10, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }),
				)}
				height="5"
				rx="1"
				style={edge(0, 1)}
				width="16"
				x="4"
				y="2"
			/>
		</>
	),
});
