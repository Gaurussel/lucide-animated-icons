import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "train-front",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.2, 0, 1.2, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] }))}>
				<motion.g
					{...part(
						pose({ opacity: [1, 0.15, 1, 0.15, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1] }),
					)}
				>
					<path d="m9 15-1-1" />
					<path d="m15 15 1-1" />
				</motion.g>
				<path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
				<path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
				<motion.path
					{...part(pose({ rotate: [0, 10, 0] }, { duration: 0.7, times: [0, 0.5, 1] }))}
					d="m8 19-2 3"
					style={pivot(8, 19)}
				/>
				<motion.path
					{...part(pose({ rotate: [0, -10, 0] }, { duration: 0.7, times: [0, 0.5, 1] }))}
					d="m16 19 2 3"
					style={pivot(16, 19)}
				/>
			</motion.g>
		</>
	),
});
