import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "popcorn",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, 0, -3, 0], scaleY: [1, 1, 1.15, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }),
				)}
				d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
				style={edge(0.5, 1)}
			/>
			<motion.g
				{...part(pose({ x: [0, -0.8, 0.8, -0.5, 0] }, { duration: 0.8, times: [0, 0.15, 0.3, 0.45, 1] }))}
			>
				<path d="M10 22 9 8" />
				<path d="m14 22 1-14" />
				<path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
			</motion.g>
		</>
	),
});
