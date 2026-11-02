import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "folder-kanban",
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
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				d="M8 10v4"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.8, delay: 0.07, times: [0, 0.3, 0.55, 1] }))}
				d="M12 10v2"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.2, 1] }, { duration: 0.8, delay: 0.14, times: [0, 0.3, 0.55, 1] }))}
				d="M16 10v6"
				style={edge(0.5, 0)}
			/>
		</motion.g>
	),
});
