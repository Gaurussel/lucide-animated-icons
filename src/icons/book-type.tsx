import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-type",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.16, times: [0, 0.2, 0.4, 1] }))}
				d="M10 13h4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.08, times: [0, 0.2, 0.4, 1] }))}
				d="M12 6v7"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				d="M16 8V6H8v2"
			/>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
		</motion.g>
	),
});
