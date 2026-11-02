import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-clock",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
			<motion.path
				{...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))}
				d="M8 14v2.2l1.6 1"
				style={pivot(8, 16)}
			/>
			<circle cx="8" cy="16" r="6" />
		</motion.g>
	),
});
