import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "package-open",
	render: (part) => (
		<>
			<path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.45, 1] }))}
				d="M12 22v-9"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1], delay: 0.1 }))}
				d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
			/>
		</>
	),
});
