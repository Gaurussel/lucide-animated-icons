import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "chart-network",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="m13.11 7.664 1.78 2.672"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="m14.162 12.788-3.324 1.424"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="m20 4-6.06 1.515"
			/>
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.circle
				{...part(pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="6"
				r="2"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay: 0.05, times: [0, 0.25, 0.5, 1] }))}
				cx="16"
				cy="12"
				r="2"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.25, 0.5, 1] }))}
				cx="9"
				cy="15"
				r="2"
				style={centered}
			/>
		</>
	),
});
