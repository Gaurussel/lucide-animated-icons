import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-right-from-line",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.8, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M3 5v14"
				style={centered}
			/>
			<motion.g
				{...part(pose({ x: [0, -1.5, 2.5, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 0.6, 1] }))}
			>
				<path d="M21 12H7" />
				<path d="m15 18 6-6-6-6" />
			</motion.g>
		</>
	),
});
