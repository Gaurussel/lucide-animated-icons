import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "copyleft",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.55, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.4, 1] }))}
				d="M9.17 14.83a4 4 0 1 0 0-5.66"
			/>
		</>
	),
});
