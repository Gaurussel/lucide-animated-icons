import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-up-2",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.g {...part(pose({ y: [0, 1, -2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M12 13V7" />
				<path d="m9 10 3-3 3 3" />
			</motion.g>
			<path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
			<motion.path
				{...part(pose({ y: [0, 1, -1.5, 0] }, { duration: 0.7, delay: 0.08, times: [0, 0.25, 0.6, 1] }))}
				d="m9 5 3-3 3 3"
			/>
		</motion.g>
	),
});
