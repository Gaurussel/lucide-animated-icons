import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-dot",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.8, 0.8, 1] }, { duration: 0.75, times: [0, 0.3, 0.55, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1, 3.5, 1] }, { duration: 0.75, times: [0, 0.25, 0.55, 1] }))}
				cx="12"
				cy="12"
				r="1"
				style={centered}
			/>
		</>
	),
});
