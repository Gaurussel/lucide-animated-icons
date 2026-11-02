import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-left-from-line",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m9 6-6 6 6 6" />
				<path d="M3 12h14" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 0.8, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M21 19V5"
				style={centered}
			/>
		</>
	),
});
