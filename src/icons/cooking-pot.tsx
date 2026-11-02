import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cooking-pot",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.96, 1, 0.98, 1] }, { duration: 0.8, times: [0, 0.25, 0.45, 0.7, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M2 12h20" />
				<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -12, 0, -7, 0], y: [0, -1.2, 0, -0.8, 0] },
						{ duration: 0.8, times: [0, 0.25, 0.45, 0.7, 1] },
					),
				)}
				style={pivot(4, 8)}
			>
				<path d="m4 8 16-4" />
				<path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
			</motion.g>
		</>
	),
});
