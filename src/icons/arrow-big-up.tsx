import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-big-up",
	render: (part) => (
		<motion.path
			{...part(
				pose({ y: [0, 1, -4, 0], scaleY: [1, 0.85, 1.05, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }),
			)}
			d="M9 18v-6H5l7-7 7 7h-4v6H9z"
			style={edge(0.5, 1)}
		/>
	),
});
