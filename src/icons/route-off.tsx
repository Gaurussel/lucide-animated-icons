import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "route-off",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.8, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.65, 1] }))}
				cx="6"
				cy="19"
				r="3"
				style={centered}
			/>
			<motion.g
				{...part(pose({ opacity: [1, 1, 0.4, 0.4, 1] }, { duration: 0.9, times: [0, 0.45, 0.65, 0.85, 1] }))}
			>
				<path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
				<path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
				<path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
				<path d="M15 5h-4.3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.1, 0.35, 0.7, 1] }))}
				d="m2 2 20 20"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.8, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.65, 1] }))}
				cx="18"
				cy="5"
				r="3"
				style={centered}
			/>
		</>
	),
});
