import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "door-closed-locked",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.3, 1, 1, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }))}
				style={edge(0, 0.5)}
			>
				<path d="M10 12h.01" />
				<path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
			</motion.g>
			<path d="M2 20h8" />
			<motion.g
				{...part(
					pose({ x: [0, 0, -2.5, 2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.6, 0.75, 1] }),
				)}
			>
				<path d="M20 17v-2a2 2 0 1 0-4 0v2" />
				<rect height="5" rx="1" width="8" x="14" y="17" />
			</motion.g>
		</>
	),
});
