import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shuffle",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, -2, 0, 0], opacity: [1, 0.2, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }),
				)}
			>
				<path d="m18 14 4 4-4 4" />
				<path d="m18 2 4 4-4 4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1], delay: 0.05 }))}
				d="M2 6h1.972a4 4 0 0 1 3.6 2.2"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1], delay: 0.1 }))}
				d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
			/>
		</>
	),
});
