import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pizza",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ y: [0, -2, -2, 0], rotate: [0, -8, -8, 0] }, { duration: 0.9, times: [0, 0.3, 0.65, 1] }),
				)}
				style={centered}
			>
				<motion.path
					{...part(pose({ scale: [1, 1, 1.9, 1] }, { duration: 0.9, times: [0, 0.35, 0.6, 1] }))}
					d="m12 14-1 1"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 1, 1.9, 1] }, { duration: 0.9, times: [0, 0.35, 0.6, 1], delay: 0.08 }))}
					d="m13.75 18.25-1.25 1.42"
					style={centered}
				/>
				<motion.path
					{...part(pose({ scale: [1, 1, 1.9, 1] }, { duration: 0.9, times: [0, 0.35, 0.6, 1], delay: 0.16 }))}
					d="M18.8 9.3a1 1 0 0 0 2.1 7.7"
					style={centered}
				/>
				<path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
				<path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
			</motion.g>
		</>
	),
});
