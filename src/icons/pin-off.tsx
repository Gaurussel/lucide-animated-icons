import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pin-off",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.7, 1] }, { duration: 0.7, times: [0, 0.25, 0.55, 1] }))}
				d="M12 17v5"
				style={edge(0.5, 0)}
			/>
			<motion.g {...part(pose({ y: [0, -1.5, 1.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.55, 1] }))}>
				<path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" />
				<path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.7, times: [0, 0.4, 0.6, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
