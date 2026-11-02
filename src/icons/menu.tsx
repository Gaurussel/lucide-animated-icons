import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "menu",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1], x: [0, 2, 0] }, { duration: 0.6, times: [0, 0.5, 1] }))}
				d="M4 6h16"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.2, 1], x: [0, -2, 0] }, { duration: 0.6, times: [0, 0.5, 1], delay: 0.12 }),
				)}
				d="M4 12h16"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ scaleX: [1, 0.2, 1], x: [0, 2, 0] }, { duration: 0.6, times: [0, 0.5, 1], delay: 0.24 }),
				)}
				d="M4 18h16"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
