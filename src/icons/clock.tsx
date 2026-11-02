import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clock",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: 360 }, { duration: 0.75, delay: 0.1, reset: true }))}
				d="M12 6v6l4 2"
				style={pivot(12, 12)}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.9, 1, 0.94, 1] }, { duration: 0.85, times: [0, 0.15, 0.5, 0.85, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
		</>
	),
});
