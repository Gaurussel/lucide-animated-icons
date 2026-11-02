import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-music",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" />
			<motion.g
				{...part(
					pose(
						{ rotate: [0, 0, -8, 8, 0], y: [0, 0, -1, -1, 0] },
						{ duration: 0.8, times: [0, 0.3, 0.5, 0.7, 1] },
					),
				)}
				style={pivot(10, 16)}
			>
				<path d="M8 18v-7.7L16 9v7" />
				<circle cx="14" cy="16" r="2" />
				<circle cx="6" cy="18" r="2" />
			</motion.g>
		</motion.g>
	),
});
