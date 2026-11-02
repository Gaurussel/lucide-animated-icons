import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "fast-forward",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.25, 0.65, 1] }))}>
				<polygon points="13 19 22 12 13 5 13 19" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}>
				<polygon points="2 19 11 12 2 5 2 19" />
			</motion.g>
		</>
	),
});
