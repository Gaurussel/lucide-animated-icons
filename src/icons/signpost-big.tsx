import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "signpost-big",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -16, 12, 0], scaleX: [1, 0.5, 1, 1], y: [0, -2.5, 2, 0] },
						{ duration: 0.85, times: [0, 0.3, 0.7, 1] },
					),
				)}
				style={pivot(10, 7)}
			>
				<path d="M10 9H4L2 7l2-2h6" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, 16, -12, 0], scaleX: [1, 0.5, 1, 1], y: [0, 2.5, -2, 0] },
						{ duration: 0.85, times: [0, 0.3, 0.7, 1], delay: 0.1 },
					),
				)}
				style={pivot(14, 7)}
			>
				<path d="M14 5h6l2 2-2 2h-6" />
			</motion.g>
			<path d="M10 22V4a2 2 0 1 1 4 0v18" />
			<path d="M8 22h8" />
		</>
	),
});
