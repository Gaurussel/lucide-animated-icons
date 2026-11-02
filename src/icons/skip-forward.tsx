import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "skip-forward",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}>
				<polygon points="5 4 15 12 5 20 5 4" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 0, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.7, 1] }))}>
				<line x1="19" x2="19" y1="5" y2="19" />
			</motion.g>
		</>
	),
});
