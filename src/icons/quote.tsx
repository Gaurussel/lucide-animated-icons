import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "quote",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, -2, 0, 0], scaleY: [1, 1.08, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }),
				)}
				d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -2, 0, 0], scaleY: [1, 1.08, 1, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.6, 1], delay: 0.12 },
					),
				)}
				d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
