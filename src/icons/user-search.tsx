import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "user-search",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, 1, -2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				cx="10"
				cy="7"
				r="4"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.55, 1] }))}
				d="M10.3 15H7a4 4 0 0 0-4 4v2"
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
				<circle cx="17" cy="17" r="3" />
				<path d="m21 21-1.9-1.9" />
			</motion.g>
		</>
	),
});
