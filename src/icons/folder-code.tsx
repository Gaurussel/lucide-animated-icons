import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-code",
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
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M10 10.5 8 13l2 2.5"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m14 10.5 2 2.5-2 2.5"
			/>
			<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
		</motion.g>
	),
});
