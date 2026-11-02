import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pointer-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}>
				<path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" />
				<path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" />
				<path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" />
				<path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" />
				<path d="M6 6v8" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.7, times: [0, 0.3, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
