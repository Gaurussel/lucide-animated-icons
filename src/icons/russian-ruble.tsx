import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "russian-ruble",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 0.8, 1, 1], scaleY: [1, 0.94, 1, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.6, 1] },
					),
				)}
				d="M6 11h8a4 4 0 0 0 0-8H9v18"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(
					pose({ y: [0, 2, -2.5, 0], scaleX: [1, 1, 0.6, 1] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }),
				)}
				d="M6 15h8"
				style={centered}
			/>
		</>
	),
});
