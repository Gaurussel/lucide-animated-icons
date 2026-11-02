import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-dashed-top-solid",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M14 21h1" />
				<path d="M21 14v1" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M21 9v1" />
				<path d="M3 14v1" />
				<path d="M3 9v1" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M9 21h1" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.1 }))}
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
			/>
		</>
	),
});
