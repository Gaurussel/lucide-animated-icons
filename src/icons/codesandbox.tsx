import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "codesandbox",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.8, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
				style={centered}
			/>
			<motion.g
				{...part(pose({ scaleX: [1, 0.35, 1] }, { duration: 0.72, delay: 0.08, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<polyline points="7.5 4.21 12 6.81 16.5 4.21" />
				<polyline points="7.5 19.79 7.5 14.6 3 12" />
				<polyline points="21 12 16.5 14.6 16.5 19.79" />
				<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
				<line x1="12" x2="12" y1="22.08" y2="12" />
			</motion.g>
		</>
	),
});
