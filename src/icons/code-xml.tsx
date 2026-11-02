import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "code-xml",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="m18 16 4-4-4-4"
			/>
			<motion.path
				{...part(pose({ x: [0, 1.5, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="m6 8-4 4 4 4"
			/>
			<motion.path
				{...part(
					pose(
						{ rotate: [0, 0, -14, 0], scaleY: [1, 0.85, 1.05, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.65, 1] },
					),
				)}
				d="m14.5 4-5 16"
				style={centered}
			/>
		</>
	),
});
