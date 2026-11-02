import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tangent",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ x: [0, 0, -3, 0], y: [0, 0, 3, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				cx="17"
				cy="4"
				r="2"
			/>
			<path d="M15.59 5.41 5.41 15.59" />
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.4, 1] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				cx="4"
				cy="17"
				r="2"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M12 22s-4-9-1.5-11.5S22 12 22 12"
			/>
		</>
	),
});
