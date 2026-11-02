import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-round-search",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="8"
				r="5"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M2 21a8 8 0 0 1 10.434-7.62"
				style={edge(0.5, 1)}
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, -2, 1.5, 0], y: [0, 0, -1.5, -0.5, 0] },
						{ duration: 0.8, times: [0, 0.35, 0.6, 0.8, 1] },
					),
				)}
			>
				<circle cx="18" cy="18" r="3" />
				<path d="m22 22-1.9-1.9" />
			</motion.g>
		</>
	),
});
