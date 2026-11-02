import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-open",
	render: (part) => (
		<motion.g
			{...part(pose({ scaleX: [1, 0.7, 0.7, 1] }, { duration: 0.75, times: [0, 0.3, 0.45, 1] }))}
			style={centered}
		>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.4, 1] }, { duration: 0.75, times: [0, 0.3, 0.55, 1] }))}
				d="M12 7v14"
				style={edge(0.5, 1)}
			/>
			<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
		</motion.g>
	),
});
