import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "music-3",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				cx="12"
				cy="18"
				r="4"
			/>
			<motion.path
				{...part(pose({ rotate: [0, 0, -8, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				d="M16 18V2"
				style={pivot(16, 18)}
			/>
		</>
	),
});
