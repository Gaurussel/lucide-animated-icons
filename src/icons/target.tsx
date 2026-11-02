import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "target",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.85, 1, 1] }, { duration: 0.75, delay: 0.1, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="6"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.6, 1] }, { duration: 0.75, delay: 0.1, times: [0, 0.3, 0.55, 1] }))}
				cx="12"
				cy="12"
				r="2"
				style={centered}
			/>
		</>
	),
});
