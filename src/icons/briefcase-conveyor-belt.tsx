import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "briefcase-conveyor-belt",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.8, delay: 0.08, times: [0, 0.2, 0.7, 1] }))}>
				<path d="M10 20v2" />
				<path d="M14 20v2" />
				<path d="M18 20v2" />
				<path d="M6 20v2" />
			</motion.g>
			<path d="M21 20H3" />
			<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.8, times: [0, 0.2, 0.7, 1] }))}>
				<path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
				<rect height="10" rx="2" width="16" x="4" y="6" />
			</motion.g>
		</>
	),
});
