import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-up-narrow-wide",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 0.35, 1] }, { duration: 0.75, times: [0, 0.4, 1] }))}
				d="M11 12h4"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.35, 1] }, { duration: 0.75, delay: 0.08, times: [0, 0.4, 1] }))}
				d="M11 16h7"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.35, 1] }, { duration: 0.75, delay: 0.16, times: [0, 0.4, 1] }))}
				d="M11 20h10"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
