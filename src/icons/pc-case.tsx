import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pc-case",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				style={edge(0.5, 1)}
			>
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.4, 1] }))}
					d="M9 6h6"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.25, 0.4, 1], delay: 0.1 }),
					)}
					d="M9 10h6"
				/>
				<motion.path
					{...part(
						pose({ opacity: [1, 1, 0, 1, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.6, 0.7, 0.8, 1] }),
					)}
					d="M15 14h.01"
				/>
				<rect height="20" rx="2" width="14" x="5" y="2" />
			</motion.g>
		</>
	),
});
