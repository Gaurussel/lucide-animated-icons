import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-down-up",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.g
				{...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.75, delay: 0.15, times: [0, 0.25, 0.6, 1] }))}
			>
				<path d="m21 8-4-4-4 4" />
				<path d="M17 4v16" />
			</motion.g>
		</>
	),
});
