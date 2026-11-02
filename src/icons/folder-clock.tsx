import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-clock",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -6, -6, 0] },
					{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
				),
			)}
			style={edge(0.5, 1)}
		>
			<motion.path
				{...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))}
				d="M16 14v2.2l1.6 1"
				style={pivot(16, 16)}
			/>
			<path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" />
			<circle cx="16" cy="16" r="6" />
		</motion.g>
	),
});
