import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "arrow-right-left",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m16 3 4 4-4 4" />
				<path d="M20 7H4" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.75, delay: 0.15, times: [0, 0.25, 0.6, 1] }))}
			>
				<path d="m8 21-4-4 4-4" />
				<path d="M4 17h16" />
			</motion.g>
		</>
	),
});
