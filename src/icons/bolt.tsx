import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bolt",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 45, 45, 0] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] }))}
				d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 0.6, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="12"
				r="4"
				style={centered}
			/>
		</>
	),
});
