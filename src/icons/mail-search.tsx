import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mail-search",
	render: (part) => (
		<>
			<path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
			<motion.path
				{...part(pose({ scaleY: [1, -0.8, -0.8, 1] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
				d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				style={edge(0.5, 0)}
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, -1.5, 1, 0], y: [0, 0, -1, 0.5, 0] },
						{ duration: 0.8, times: [0, 0.45, 0.65, 0.85, 1] },
					),
				)}
			>
				<path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
				<circle cx="18" cy="18" r="3" />
				<path d="m22 22-1.5-1.5" />
			</motion.g>
		</>
	),
});
