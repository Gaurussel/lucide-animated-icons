import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ x: [0, -1.5, 2.5, 0], y: [0, 0.5, -1, 0], scaleX: [1, 0.95, 1.05, 1] },
					{ duration: 0.85, times: [0, 0.25, 0.6, 1] },
				),
			)}
			d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
			style={centered}
		/>
	),
});
