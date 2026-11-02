import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "earth-lock",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 0] }, { duration: 0.6, times: [0, 0.4, 1] }))}>
				<path d="M7 3.34V5a3 3 0 0 0 3 3" />
				<path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
				<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.95, 1] }, { duration: 0.85, times: [0, 0.4, 1] }))} style={centered}>
				<path d="M12 2a10 10 0 1 0 9.54 13" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M20 6V4a2 2 0 1 0-4 0v2" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 1, 0.88, 1] }, { duration: 0.85, times: [0, 0.3, 0.6, 0.75, 1] }))}
				style={edge(0.5, 1)}
			>
				<rect height="5" rx="1" width="8" x="14" y="6" />
			</motion.g>
		</>
	),
});
