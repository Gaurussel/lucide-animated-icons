import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-stop",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.rect
				{...part(pose({ scale: [1, 0.6, 0.6, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				height="6"
				rx="1"
				style={centered}
				width="6"
				x="9"
				y="9"
			/>
		</>
	),
});
