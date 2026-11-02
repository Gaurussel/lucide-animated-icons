import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "projector",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -6, 0, 0] }, { duration: 0.9, times: [0, 0.3, 0.55, 1] }))}
				style={pivot(12, 20)}
			>
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.45, 1] }))}
					d="M5 7 3 5"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.45, 1], delay: 0.07 }),
					)}
					d="M9 6V3"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.45, 1], delay: 0.14 }),
					)}
					d="m13 7 2-2"
				/>
				<motion.circle
					{...part(pose({ scale: [1, 0.8, 1, 1] }, { duration: 0.9, times: [0, 0.25, 0.5, 1] }))}
					cx="9"
					cy="13"
					r="3"
					style={centered}
				/>
				<path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
				<path d="M16 16h2" />
			</motion.g>
		</>
	),
});
