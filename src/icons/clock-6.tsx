import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clock-6",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				d="M12 6v10"
				style={pivot(12, 12)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.92, 1, 0.96, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.85, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
		</>
	),
});
