import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down-1-0",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.1, times: [0, 0.4, 0.41, 1] },
					),
				)}
			>
				<path d="M17 10V4h-2" />
				<path d="M15 10h4" />
			</motion.g>
			<motion.rect
				{...part(
					pose(
						{ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.22, times: [0, 0.4, 0.41, 1] },
					),
				)}
				height="6"
				ry="2"
				width="4"
				x="15"
				y="14"
			/>
		</>
	),
});
