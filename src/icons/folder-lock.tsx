import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-lock",
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
			<rect height="5" rx="1" width="8" x="14" y="17" />
			<path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
			<motion.path
				{...part(pose({ y: [0, 0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				d="M20 17v-2a2 2 0 1 0-4 0v2"
			/>
		</motion.g>
	),
});
