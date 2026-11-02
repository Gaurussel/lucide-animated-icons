import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "captions-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
				<path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -2, 0], opacity: [1, 0.3, 1] }, { duration: 0.6, times: [0, 0.4, 1] }))}>
				<path d="M17 11h-.5" />
				<path d="M7 11h4" />
				<path d="M7 15h2.5" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.15, times: [0, 0.2, 0.4, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
