import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dock",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}>
				<path d="M2 8h20" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.96, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))} style={centered}>
				<rect height="16" rx="2" width="20" x="2" y="4" />
			</motion.g>
			<motion.g
				{...part(
					pose({ y: [0, -2, -2, 0], scaleX: [1, 1, 1.25, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }),
				)}
				style={centered}
			>
				<path d="M6 16h12" />
			</motion.g>
		</>
	),
});
