import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "step-back",
	render: (part) => (
		<>
			<motion.line
				{...part(
					pose(
						{ x: [0, 0, -1.5, -1.5, 0], scaleY: [1, 1, 0.8, 0.8, 1] },
						{ duration: 0.7, times: [0, 0.2, 0.5, 0.65, 1] },
					),
				)}
				style={centered}
				x1="18"
				x2="18"
				y1="20"
				y2="4"
			/>
			<motion.polygon
				{...part(pose({ x: [0, 1.5, -3, -3, 0] }, { duration: 0.7, times: [0, 0.2, 0.5, 0.65, 1] }))}
				points="14,20 4,12 14,4"
			/>
		</>
	),
});
