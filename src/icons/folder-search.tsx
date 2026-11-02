import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-search",
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
			<path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" />
			<motion.g
				{...part(
					pose(
						{ x: [0, 1, -3, -3, 0], y: [0, 1, -3, -3, 0] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 0.7, 1] },
					),
				)}
			>
				<path d="m21 21-1.9-1.9" />
				<circle cx="17" cy="17" r="3" />
			</motion.g>
		</motion.g>
	),
});
