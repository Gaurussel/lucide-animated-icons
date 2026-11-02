import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-digit",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.rect
				{...part(
					pose({ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.31, 1] }),
				)}
				height="6"
				rx="2"
				width="4"
				x="2"
				y="12"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.8, delay: 0.1, times: [0, 0.3, 0.31, 1] },
					),
				)}
				d="M10 12h2v6"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.8, delay: 0.1, times: [0, 0.3, 0.31, 1] },
					),
				)}
				d="M10 18h4"
			/>
		</motion.g>
	),
});
