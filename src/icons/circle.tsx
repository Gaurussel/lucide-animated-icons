import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ scale: [1, 0.85, 0.85, 1], rotate: [0, -90, -90, 0] },
					{ duration: 0.7, times: [0, 0.3, 0.4, 1] },
				),
			)}
			style={centered}
		>
			<motion.circle
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.7, times: [0, 0.35, 1] }))}
				cx="12"
				cy="12"
				r="10"
			/>
		</motion.g>
	),
});
