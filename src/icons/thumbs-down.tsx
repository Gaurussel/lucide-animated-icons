import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "thumbs-down",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ rotate: [0, -8, 14, 14, 0], y: [0, -1, 1.5, 1.5, 0] },
					{ duration: 0.75, times: [0, 0.2, 0.5, 0.7, 1] },
				),
			)}
			style={pivot(7, 2)}
		>
			<path d="M17 14V2" />
			<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
		</motion.g>
	),
});
