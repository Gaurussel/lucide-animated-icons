import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-key",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.g
				{...part(pose({ rotate: [0, 0, -30, -30, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				style={pivot(10, 16)}
			>
				<circle cx="10" cy="16" r="2" />
				<path d="m16 10-4.5 4.5" />
				<path d="m15 11 1 1" />
			</motion.g>
		</motion.g>
	),
});
