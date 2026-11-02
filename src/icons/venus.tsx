import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "venus",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1.2, 1.2, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] }))}
				d="M12 15v7"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.6, 1, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] }))}
				d="M9 19h6"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ y: [0, 0.6, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.5, 0.75, 1] }))}
				cx="12"
				cy="9"
				r="6"
			/>
		</>
	),
});
