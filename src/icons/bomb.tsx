import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bomb",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ x: [0, 0, -0.8, 0.8, 0] }, { duration: 0.8, times: [0, 0.55, 0.7, 0.85, 1] }))}
				cx="11"
				cy="13"
				r="9"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.35, 0.35, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.15, 0.3, 0.45, 1] }))}
				d="m22 2-1.5 1.5"
			/>
		</>
	),
});
