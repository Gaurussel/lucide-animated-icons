import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ear",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
				<motion.g {...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.8] }))}>
					<path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
				</motion.g>
			</motion.g>
		</>
	),
});
