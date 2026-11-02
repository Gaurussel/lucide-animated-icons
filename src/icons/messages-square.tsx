import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "messages-square",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ scale: [1, 0.85, 1, 1], y: [0, -2, 0, 0] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }),
				)}
				d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
				style={edge(0, 1)}
			/>
			<motion.path
				{...part(
					pose({ scale: [1, 1, 0.85, 1], y: [0, 0, 2, 0] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] }),
				)}
				d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
				style={edge(1, 1)}
			/>
		</>
	),
});
