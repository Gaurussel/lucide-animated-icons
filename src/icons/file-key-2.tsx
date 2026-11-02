import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-key-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g
				{...part(pose({ rotate: [0, 0, -30, -30, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				style={pivot(4, 16)}
			>
				<circle cx="4" cy="16" r="2" />
				<path d="m10 10-4.5 4.5" />
				<path d="m9 11 1 1" />
			</motion.g>
		</motion.g>
	),
});
