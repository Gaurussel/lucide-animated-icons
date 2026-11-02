import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-vertical-distribute-center",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}>
				<path d="M22 17h-3" />
				<path d="M5 17H2" />
				<rect height="6" rx="2" width="14" x="5" y="14" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1.5, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.45, 1] }))}>
				<path d="M22 7h-5" />
				<path d="M7 7H2" />
				<rect height="6" rx="2" width="10" x="7" y="4" />
			</motion.g>
		</>
	),
});
