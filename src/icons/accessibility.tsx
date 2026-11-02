import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "accessibility",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ y: [0, -1.5, 0] }, { duration: 0.8, times: [0, 0.35, 1] }))}
				cx="16"
				cy="4"
				r="1"
			/>
			<motion.g {...part(pose({ x: [0, 1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}>
				<path d="m18 19 1-7-6 1" />
				<path d="m5 8 3-3 5.5 3-2.36 3.5" />
			</motion.g>
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.7, delay: 0.1, reset: true }))} style={pivot(9, 16)}>
				<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
				<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
			</motion.g>
		</>
	),
});
