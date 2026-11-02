import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "route",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.3, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.35, 1] }))}
				cx="6"
				cy="19"
				r="3"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.9, times: [0, 0.1, 0.7, 1] }))}
				d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.3, 1] }, { duration: 0.9, times: [0, 0.65, 0.82, 1] }))}
				cx="18"
				cy="5"
				r="3"
				style={centered}
			/>
		</>
	),
});
