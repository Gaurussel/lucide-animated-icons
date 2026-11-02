import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "squares-intersect",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, 1.5, 1.5, 0], y: [0, 1.5, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
			>
				<path d="M10 22a2 2 0 0 1-2-2" />
				<path d="M16 22h-2" />
				<path d="M20 8a2 2 0 0 1 2 2" />
				<path d="M22 14v2" />
				<path d="M22 20a2 2 0 0 1-2 2" />
			</motion.g>
			<motion.g
				{...part(
					pose({ x: [0, -1.5, -1.5, 0], y: [0, -1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
			>
				<path d="M14 2a2 2 0 0 1 2 2" />
				<path d="M2 10V8" />
				<path d="M2 4a2 2 0 0 1 2-2" />
				<path d="M4 16a2 2 0 0 1-2-2" />
				<path d="M8 2h2" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 0.6, 0.6, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z"
				style={centered}
			/>
		</>
	),
});
