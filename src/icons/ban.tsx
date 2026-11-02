import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ban",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.05, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.45, 0.5, 1] }))}
				d="m4.9 4.9 14.2 14.2"
			/>
		</>
	),
});
