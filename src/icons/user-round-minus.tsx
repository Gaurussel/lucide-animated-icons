import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-round-minus",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M2 21a8 8 0 0 1 13.292-6"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="8"
				r="5"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.3, 0.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M22 19h-6"
				style={centered}
			/>
		</>
	),
});
