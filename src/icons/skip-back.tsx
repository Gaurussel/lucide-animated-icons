import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "skip-back",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}>
				<polygon points="19 20 9 12 19 4 19 20" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 0, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.7, 1] }))}>
				<line x1="5" x2="5" y1="19" y2="5" />
			</motion.g>
		</>
	),
});
