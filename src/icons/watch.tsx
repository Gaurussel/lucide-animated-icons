import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "watch",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))}
				d="M12 10v2.2l1.6 1"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.5, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }))}
				d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
				style={edge(0.5, 0)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.85, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="6"
				style={centered}
			/>
		</>
	),
});
