import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tv",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -18, 12, 0, 0] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.55, 1] }))}
				d="m17 2-5 5-5-5"
				style={pivot(12, 7)}
			/>
			<motion.rect
				{...part(
					pose(
						{ scaleX: [1, 1, 0.96, 1, 0.98, 1], scaleY: [1, 1, 0.78, 1, 0.88, 1] },
						{ duration: 0.85, times: [0, 0.5, 0.6, 0.7, 0.8, 1] },
					),
				)}
				height="15"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="7"
			/>
		</>
	),
});
