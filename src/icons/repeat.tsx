import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "repeat",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0, 0] }, { duration: 0.9, times: [0, 0.1, 0.4, 0.6, 1] }))}>
				<path d="m17 2 4 4-4 4" />
				<path d="M3 11v-1a4 4 0 0 1 4-4h14" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, 0, 1.5, -3, 0, 0] }, { duration: 0.9, times: [0, 0.2, 0.3, 0.6, 0.8, 1] }))}
			>
				<path d="m7 22-4-4 4-4" />
				<path d="M21 13v1a4 4 0 0 1-4 4H3" />
			</motion.g>
		</>
	),
});
