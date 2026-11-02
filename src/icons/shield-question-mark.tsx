import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shield-question-mark",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ rotate: [0, -12, 10, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
				style={pivot(12, 13)}
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -1.5, 0, 0] }, { duration: 0.8, times: [0, 0.5, 0.65, 0.8, 1] }))}
				d="M12 17h.01"
			/>
		</>
	),
});
