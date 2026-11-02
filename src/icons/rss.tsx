import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rss",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 1.7, 1, 1] }, { duration: 0.8, times: [0, 0.15, 0.35, 1] }))}
				cx="5"
				cy="19"
				r="1"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1, 0, 0], y: [0, 0, -1, 0, 0], opacity: [1, 1, 0.2, 1, 1] },
						{ duration: 0.8, times: [0, 0.25, 0.4, 0.6, 1] },
					),
				)}
				d="M4 11a9 9 0 0 1 9 9"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1.5, 0, 0], y: [0, 0, -1.5, 0, 0], opacity: [1, 1, 0.2, 1, 1] },
						{ duration: 0.8, times: [0, 0.4, 0.55, 0.8, 1] },
					),
				)}
				d="M4 4a16 16 0 0 1 16 16"
			/>
		</>
	),
});
