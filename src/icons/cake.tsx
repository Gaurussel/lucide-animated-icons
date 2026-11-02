import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cake",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.9, 0.9, 1] }, { duration: 0.85, times: [0, 0.4, 0.7, 1] }))}
				d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, delay: 0.1, times: [0, 0.25, 0.5, 1] }))}
				d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
			/>
			<path d="M2 21h20" />
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.4, 0.4, 1] }, { duration: 0.85, times: [0, 0.4, 0.6, 0.8, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M7 8v3" />
				<path d="M12 8v3" />
				<path d="M17 8v3" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 0, 2, 2, 0] }, { duration: 0.85, times: [0, 0.4, 0.6, 0.8, 1] }))}>
				<motion.path
					{...part(
						pose(
							{ opacity: [1, 0.2, 1, 0.2, 1, 1] },
							{ duration: 0.5, times: [0, 0.12, 0.25, 0.37, 0.5, 1] },
						),
					)}
					d="M7 4h.01"
				/>
				<motion.path
					{...part(
						pose(
							{ opacity: [1, 0.2, 1, 0.2, 1, 1] },
							{ duration: 0.5, delay: 0.04, times: [0, 0.12, 0.25, 0.37, 0.5, 1] },
						),
					)}
					d="M12 4h.01"
				/>
				<motion.path
					{...part(
						pose(
							{ opacity: [1, 0.2, 1, 0.2, 1, 1] },
							{ duration: 0.5, delay: 0.08, times: [0, 0.12, 0.25, 0.37, 0.5, 1] },
						),
					)}
					d="M17 4h.01"
				/>
			</motion.g>
		</>
	),
});
