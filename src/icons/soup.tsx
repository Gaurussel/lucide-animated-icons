import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "soup",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.85, times: [0, 0.25, 0.5, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
			</motion.g>
			<path d="M7 21h10" />
			<motion.g
				{...part(pose({ rotate: [0, -12, 10, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(19.5, 12)}
			>
				<path d="M19.5 12 22 6" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, -2, 0], opacity: [1, 0.2, 1] }, { duration: 0.6, times: [0, 0.5, 1] }))}
				d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
			/>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], opacity: [1, 0.2, 1] }, { duration: 0.6, times: [0, 0.5, 1], delay: 0.1 }),
				)}
				d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
			/>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0], opacity: [1, 0.2, 1] }, { duration: 0.6, times: [0, 0.5, 1], delay: 0.2 }),
				)}
				d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
			/>
		</>
	),
});
