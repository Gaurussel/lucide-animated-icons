import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scale-3d",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 1.12, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.55, 0.85, 1] }))}
				d="M5 7v11a1 1 0 0 0 1 1h11"
				style={edge(0, 1)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 1.2, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.55, 0.85, 1] }))}
				d="M5.293 18.707 11 13"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ x: [0, -1.2, 2.2, 0, 0] }, { duration: 0.85, times: [0, 0.15, 0.55, 0.85, 1] }))}
				cx="19"
				cy="19"
				r="2"
			/>
			<motion.circle
				{...part(pose({ y: [0, 1.2, -2.2, 0, 0] }, { duration: 0.85, times: [0, 0.15, 0.55, 0.85, 1] }))}
				cx="5"
				cy="5"
				r="2"
			/>
		</>
	),
});
