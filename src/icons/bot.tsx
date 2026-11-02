import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bot",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -6, -6, 0] }, { duration: 0.85, times: [0, 0.4, 0.75, 1] }))}
			style={pivot(12, 20)}
		>
			<motion.g
				{...part(pose({ rotate: [0, -25, 15, 0] }, { duration: 0.6, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(12, 8)}
			>
				<path d="M12 8V4H8" />
			</motion.g>
			<rect height="12" rx="2" width="16" x="4" y="8" />
			<path d="M2 14h2" />
			<path d="M20 14h2" />
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0, 2, 2, 0], scaleY: [1, 0.1, 1, 1, 1, 1] },
						{ duration: 0.85, times: [0, 0.15, 0.3, 0.5, 0.75, 1] },
					),
				)}
				style={centered}
			>
				<path d="M15 13v2" />
				<path d="M9 13v2" />
			</motion.g>
		</motion.g>
	),
});
