import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bold",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ scaleX: [1, 1, 1.25, 1.25, 1], scaleY: [1, 0.85, 1, 1, 1] },
					{ duration: 0.65, times: [0, 0.25, 0.5, 0.65, 1] },
				),
			)}
			d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
			style={edge(0, 1)}
		/>
	),
});
