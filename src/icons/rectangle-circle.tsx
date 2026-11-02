import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rectangle-circle",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 0, -1.5, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }))}
				d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
			/>
			<motion.circle
				{...part(
					pose({ x: [0, 2, -3, 0], scale: [1, 1, 0.94, 1] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }),
				)}
				cx="14"
				cy="12"
				r="8"
				style={centered}
			/>
		</>
	),
});
