import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-left-right",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M8 3 4 7l4 4" />
				<path d="M4 7h16" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.75, delay: 0.15, times: [0, 0.25, 0.6, 1] }))}
			>
				<path d="m16 21 4-4-4-4" />
				<path d="M20 17H4" />
			</motion.g>
		</>
	),
});
