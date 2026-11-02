import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "paintbrush-vertical",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -10, 6, 0] }, { duration: 0.7, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(12, 2)}
			>
				<path d="M10 2v2" />
				<path d="M14 2v4" />
				<path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
				<motion.path
					{...part(pose({ y: [0, 0, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
					d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
				/>
			</motion.g>
		</>
	),
});
