import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pilcrow-right",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 0, 2, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M10 3v11" />
				<path d="M10 9H7a1 1 0 0 1 0-6h8" />
				<path d="M14 3v11" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="m18 14 4 4H2" />
				<path d="m22 18-4 4" />
			</motion.g>
		</>
	),
});
