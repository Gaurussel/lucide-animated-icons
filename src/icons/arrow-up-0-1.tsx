import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-up-0-1",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
			</motion.g>
			<motion.rect
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.1, times: [0, 0.4, 0.41, 1] },
					),
				)}
				height="6"
				ry="2"
				width="4"
				x="15"
				y="4"
			/>
			<motion.g
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.22, times: [0, 0.4, 0.41, 1] },
					),
				)}
			>
				<path d="M17 20v-6h-2" />
				<path d="M15 20h4" />
			</motion.g>
		</>
	),
});
