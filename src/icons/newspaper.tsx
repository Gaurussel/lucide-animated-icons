import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "newspaper",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
				<motion.rect
					{...part(pose({ scaleX: [1, 0.2, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 1] }))}
					height="4"
					rx="1"
					style={edge(0, 0.5)}
					width="8"
					x="10"
					y="6"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.15 }),
					)}
					d="M15 18h-5"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], delay: 0.05 }),
					)}
					d="M18 14h-8"
				/>
			</motion.g>
		</>
	),
});
