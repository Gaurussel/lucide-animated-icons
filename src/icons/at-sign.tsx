import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "at-sign",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.6, 1, 1] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}
				cx="12"
				cy="12"
				r="4"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.15, 1] }, { duration: 0.8, times: [0, 0.35, 1] }))}
				d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
			/>
		</>
	),
});
