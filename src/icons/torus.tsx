import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "torus",
	render: (part) => (
		<>
			<motion.ellipse
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.5, 1] }))}
				cx="12"
				cy="11"
				rx="3"
				ry="2"
				style={centered}
			/>
			<motion.ellipse
				{...part(pose({ scaleX: [1, 0.8, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))}
				cx="12"
				cy="12.5"
				rx="10"
				ry="8.5"
				style={centered}
			/>
		</>
	),
});
