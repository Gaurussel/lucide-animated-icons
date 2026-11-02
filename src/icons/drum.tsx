import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "drum",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 55, 0, 0, 0, 0] }, { duration: 0.9, times: [0, 0.2, 0.35, 0.55, 0.7, 1] }))}
				style={pivot(10, 10)}
			>
				<path d="m2 2 8 8" />
			</motion.g>
			<motion.g
				{...part(
					pose({ rotate: [0, 0, 0, -55, 0, 0] }, { duration: 0.9, times: [0, 0.2, 0.35, 0.55, 0.7, 1] }),
				)}
				style={pivot(14, 10)}
			>
				<path d="m22 2-8 8" />
			</motion.g>
			<motion.g
				{...part(
					pose({ scaleY: [1, 1, 0.55, 1, 0.55, 1] }, { duration: 0.9, times: [0, 0.2, 0.35, 0.55, 0.7, 1] }),
				)}
				style={centered}
			>
				<ellipse cx="12" cy="9" rx="10" ry="5" />
			</motion.g>
			<motion.g
				{...part(
					pose({ scaleY: [1, 1, 0.9, 1, 0.9, 1] }, { duration: 0.9, times: [0, 0.2, 0.35, 0.55, 0.7, 1] }),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M7 13.4v7.9" />
				<path d="M12 14v8" />
				<path d="M17 13.4v7.9" />
				<path d="M2 9v8a10 5 0 0 0 20 0V9" />
			</motion.g>
		</>
	),
});
