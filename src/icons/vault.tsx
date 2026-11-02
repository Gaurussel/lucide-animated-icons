import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "vault",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 1, 0.88, 0.88, 1] }, { duration: 0.85, times: [0, 0.45, 0.6, 0.8, 1] }))}
				style={edge(0, 0.5)}
			>
				<rect height="18" rx="2" width="18" x="3" y="3" />
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0.2, 0.2, 1] }, { duration: 0.85, times: [0, 0.15, 0.35, 0.8, 1] }),
					)}
					d="m7.9 7.9 2.7 2.7"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0.2, 0.2, 1] }, { duration: 0.85, times: [0, 0.15, 0.35, 0.8, 1] }),
					)}
					d="m13.4 10.6 2.7-2.7"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0.2, 0.2, 1] }, { duration: 0.85, times: [0, 0.15, 0.35, 0.8, 1] }),
					)}
					d="m7.9 16.1 2.7-2.7"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0.2, 0.2, 1] }, { duration: 0.85, times: [0, 0.15, 0.35, 0.8, 1] }),
					)}
					d="m13.4 13.4 2.7 2.7"
				/>
				<motion.circle
					{...part(pose({ scale: [1, 0.7, 1] }, { duration: 0.4, times: [0, 0.5, 1] }))}
					cx="12"
					cy="12"
					r="2"
					style={centered}
				/>
			</motion.g>
			<circle cx="7.5" cy="7.5" fill="currentColor" r=".5" />
			<circle cx="16.5" cy="7.5" fill="currentColor" r=".5" />
			<circle cx="7.5" cy="16.5" fill="currentColor" r=".5" />
			<circle cx="16.5" cy="16.5" fill="currentColor" r=".5" />
		</>
	),
});
