import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-gauge",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.94, 1] }, { duration: 0.85, times: [0, 0.3, 0.55, 1] }))}
				d="M15.6 2.7a10 10 0 1 0 5.7 5.7"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1.3, 1] }, { duration: 0.85, times: [0, 0.35, 1] }))}
				cx="12"
				cy="12"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ rotate: [0, -70, -70, 0] }, { duration: 0.85, times: [0, 0.35, 0.5, 1] }))}
				d="M13.4 10.6 19 5"
				style={pivot(12, 12)}
			/>
		</>
	),
});
