import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-play",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.polygon
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				points="10 8 16 12 10 16 10 8"
			/>
		</>
	),
});
