import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "non-binary",
	render: (part) => (
		<>
			<path d="M12 2v10" />
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.7, reset: true }))} style={pivot(12, 6)}>
				<path d="m8.5 4 7 4" />
				<path d="m8.5 8 7-4" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.85, 1] }, { duration: 0.7, times: [0, 0.35, 1] }))}
				cx="12"
				cy="17"
				r="5"
				style={centered}
			/>
		</>
	),
});
