import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-key",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.g
				{...part(pose({ rotate: [0, 35, 35, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
				style={pivot(14, 8)}
			>
				<path d="m19 3 1 1" />
				<path d="m20 2-4.5 4.5" />
				<circle cx="14" cy="8" r="2" />
			</motion.g>
			<path d="M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844" />
		</motion.g>
	),
});
