import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "text-select",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<path d="M14 21h1" />
				<path d="M14 3h1" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M21 14v1" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M21 9v1" />
				<path d="M3 14v1" />
				<path d="M3 9v1" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M9 21h1" />
				<path d="M9 3h1" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.2, times: [0, 0.25, 0.45, 1] }))}
				d="M7 12h10"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.3, times: [0, 0.25, 0.45, 1] }))}
				d="M7 16h6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.1, times: [0, 0.25, 0.45, 1] }))}
				d="M7 8h8"
			/>
		</>
	),
});
