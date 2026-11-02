import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-vertical-space-between",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.45, 1] }))}>
				<rect height="6" rx="2" width="14" x="5" y="15" />
				<path d="M2 21h20" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1.5, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.45, 1] }))}>
				<rect height="6" rx="2" width="10" x="7" y="3" />
				<path d="M2 3h20" />
			</motion.g>
		</>
	),
});
