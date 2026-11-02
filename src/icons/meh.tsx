import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "meh",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -4, 4, 0], y: [0, -3.5, -3.5, 0], scale: [1, 3, 3, 1] },
						{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
					),
				)}
			>
				<line x1="9" x2="9.01" y1="9" y2="9" />
				<line x1="15" x2="15.01" y1="9" y2="9" />
			</motion.g>
			<motion.line
				{...part(
					pose(
						{ scaleX: [1, 0.75, 1, 1], x: [0, -3, 3, 0], rotate: [0, -16, 16, 0] },
						{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
					),
				)}
				style={centered}
				x1="8"
				x2="16"
				y1="15"
				y2="15"
			/>
			<motion.circle
				{...part(
					pose(
						{ scaleX: [1, 0.9, 0.9, 1], scaleY: [1, 1.05, 1.05, 1] },
						{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
					),
				)}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
		</>
	),
});
