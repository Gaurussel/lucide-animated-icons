import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-dashed-kanban",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.45, 0.45, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				d="M8 7v7"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.45, 0.45, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1], delay: 0.1 }),
				)}
				d="M12 7v4"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(
					pose({ scaleY: [1, 0.45, 0.45, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1], delay: 0.2 }),
				)}
				d="M16 7v9"
				style={edge(0.5, 0)}
			/>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M9 3h1" />
				<path d="M14 3h1" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M21 9v1" />
				<path d="M21 14v1" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M14 21h1" />
				<path d="M9 21h1" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M3 14v1" />
				<path d="M3 9v1" />
			</motion.g>
		</>
	),
});
