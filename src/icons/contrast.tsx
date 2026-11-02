import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "contrast",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.94, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				cx="12"
				cy="12"
				r="10"
				style={centered}
			/>
			<motion.path
				{...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))}
				d="M12 18a6 6 0 0 0 0-12v12z"
				style={pivot(12, 12)}
			/>
		</>
	),
});
