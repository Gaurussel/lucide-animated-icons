import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tree-pine",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, -7.5, 6, -3, 0], scaleY: [1, 1.06, 1, 1.03, 1] },
						{ duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
				style={pivot(12, 19)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.7, 1] }, { duration: 0.85, times: [0, 0.5, 1] }))}
				d="M12 22v-3"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
