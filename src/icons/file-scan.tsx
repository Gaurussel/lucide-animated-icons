import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-scan",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g
				{...part(pose({ scale: [1, 1, 0.8, 0.8, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				style={centered}
			>
				<path d="M16 14a2 2 0 0 0-2 2" />
				<path d="M20 14a2 2 0 0 1 2 2" />
				<path d="M20 22a2 2 0 0 0 2-2" />
				<path d="M16 22a2 2 0 0 1-2-2" />
			</motion.g>
		</motion.g>
	),
});
