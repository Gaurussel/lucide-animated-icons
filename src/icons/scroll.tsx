import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scroll",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.88, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.8, 1] }))}
				d="M19 17V5a2 2 0 0 0-2-2H4"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, -1.5, 0, 0], scaleY: [1, 1, 0.93, 1, 1] },
						{ duration: 0.85, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
				style={centered}
			/>
		</>
	),
});
