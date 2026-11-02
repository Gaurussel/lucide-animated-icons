import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "creative-commons",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.92, 1] }, { duration: 0.6, times: [0, 0.4, 1] }))} style={centered}>
				<circle cx="12" cy="12" r="10" />
			</motion.g>
			<motion.g
				{...part(
					pose({ scale: [1, 0.7, 1], x: [0, 1.5, 0] }, { duration: 0.6, delay: 0.08, times: [0, 0.4, 1] }),
				)}
				style={centered}
			>
				<path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
			</motion.g>
			<motion.g
				{...part(
					pose({ scale: [1, 0.7, 1], x: [0, -1.5, 0] }, { duration: 0.6, delay: 0.18, times: [0, 0.4, 1] }),
				)}
				style={centered}
			>
				<path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
			</motion.g>
		</>
	),
});
