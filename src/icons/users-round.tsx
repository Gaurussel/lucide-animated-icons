import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "users-round",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M18 21a8 8 0 0 0-16 0"
				style={edge(0.5, 1)}
			/>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="8"
				r="5"
			/>
			<motion.path
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, delay: 0.12, times: [0, 0.2, 0.55, 1] }))}
				d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
			/>
		</>
	),
});
