import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-root",
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
			<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.3, 1.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				cx="12"
				cy="13"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.15, times: [0, 0.3, 0.5, 1] }))}
				d="M12 15v5"
			/>
		</motion.g>
	),
});
