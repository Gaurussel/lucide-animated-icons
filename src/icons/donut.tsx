import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "donut",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -12, 360] }, { duration: 0.8, times: [0, 0.2, 1], reset: true }))}
				style={pivot(12, 12)}
			>
				<path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.6, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="3" />
			</motion.g>
		</>
	),
});
