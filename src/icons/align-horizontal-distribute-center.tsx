import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-horizontal-distribute-center",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}>
				<rect height="14" rx="2" width="6" x="4" y="5" />
				<path d="M7 22v-3" />
				<path d="M7 5V2" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1.5, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.45, 1] }))}>
				<rect height="10" rx="2" width="6" x="14" y="7" />
				<path d="M17 22v-5" />
				<path d="M17 7V2" />
			</motion.g>
		</>
	),
});
