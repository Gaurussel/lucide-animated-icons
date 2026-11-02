import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-open-check",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.7, 0.7, 1] }, { duration: 0.75, times: [0, 0.3, 0.45, 1] }))}
				style={centered}
			>
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.4, 1] }, { duration: 0.75, times: [0, 0.3, 0.55, 1] }))}
					d="M12 21V7"
					style={edge(0.5, 1)}
				/>
				<path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				d="m16 12 2 2 4-4"
			/>
		</>
	),
});
