import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rotate-ccw-square",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"
				style={centered}
			/>
			<motion.g {...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M20 9V7a2 2 0 0 0-2-2h-6" />
				<path d="m15 2-3 3 3 3" />
			</motion.g>
		</>
	),
});
