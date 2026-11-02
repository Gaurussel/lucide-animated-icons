import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "thermometer",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ pathLength: [1, 0.15, 1, 1], scaleY: [1, 1, 0.94, 1] },
					{ duration: 0.8, times: [0, 0.4, 0.8, 1] },
				),
			)}
			d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
			style={edge(0.5, 1)}
		/>
	),
});
