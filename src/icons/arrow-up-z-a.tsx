import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-up-z-a",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.1, times: [0, 0.4, 0.41, 1] },
					),
				)}
				d="M15 4h5l-5 6h5"
			/>
			<motion.g
				{...part(
					pose(
						{ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.5, delay: 0.22, times: [0, 0.4, 0.41, 1] },
					),
				)}
			>
				<path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
				<path d="M20 18h-5" />
			</motion.g>
		</>
	),
});
