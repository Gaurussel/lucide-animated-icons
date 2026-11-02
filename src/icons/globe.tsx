import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "globe",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.95, 1, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.7, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.15, 1, 0.15, 1] }, { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] }))}
				d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.85, 1] }, { duration: 0.85, times: [0, 0.25, 0.5, 1] }))}
				d="M2 12h20"
				style={centered}
			/>
		</>
	),
});
