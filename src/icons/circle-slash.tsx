import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-slash",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1] }))}
				x1="9"
				x2="15"
				y1="15"
				y2="9"
			/>
		</>
	),
});
