import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-input",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 0, 1.5, 0] }, { duration: 0.75, times: [0, 0.4, 0.7, 1] }))}>
				<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
				<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1.5, 4, 0] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M2 15h10" />
				<path d="m9 18 3-3-3-3" />
			</motion.g>
		</>
	),
});
