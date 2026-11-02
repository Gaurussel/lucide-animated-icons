import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pilcrow-left",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 0, -2, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M14 3v11" />
				<path d="M14 9h-3a3 3 0 0 1 0-6h9" />
				<path d="M18 3v11" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 1, -3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M22 18H2l4-4" />
				<path d="m6 22-4-4" />
			</motion.g>
		</>
	),
});
