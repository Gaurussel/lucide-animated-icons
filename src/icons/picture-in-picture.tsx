import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "picture-in-picture",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, -1, 1.5, 0], y: [0, -1, 1.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.55, 1] }),
				)}
			>
				<path d="M2 10h6V4" />
				<path d="m2 4 6 6" />
			</motion.g>
			<motion.rect
				{...part(pose({ scale: [1, 1, 0.78, 1] }, { duration: 0.8, times: [0, 0.25, 0.55, 1] }))}
				height="7"
				rx="1"
				style={edge(1, 1)}
				width="10"
				x="12"
				y="14"
			/>
			<path d="M21 10V7a2 2 0 0 0-2-2h-7" />
			<path d="M3 14v2a2 2 0 0 0 2 2h3" />
		</>
	),
});
