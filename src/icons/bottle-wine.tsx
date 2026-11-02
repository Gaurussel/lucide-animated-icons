import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bottle-wine",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, 25, 25, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
			style={pivot(12, 20)}
		>
			<path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
			<motion.path
				{...part(pose({ scaleX: [1, 0.6, 0.6, 1] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
				d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4"
				style={edge(1, 0.5)}
			/>
		</motion.g>
	),
});
