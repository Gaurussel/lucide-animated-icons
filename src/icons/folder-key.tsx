import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-key",
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
			<motion.g
				{...part(pose({ rotate: [0, 0, -30, -30, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				style={pivot(16, 20)}
			>
				<circle cx="16" cy="20" r="2" />
				<path d="m22 14-4.5 4.5" />
				<path d="m21 15 1 1" />
			</motion.g>
			<path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2" />
		</motion.g>
	),
});
