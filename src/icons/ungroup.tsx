import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const times = [0, 0.2, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "ungroup",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1, -2.5, -2.5, 0], y: [0, 0.8, -2, -2, 0] }, { duration: 0.75, times }))}>
				<rect height="6" rx="1" width="8" x="5" y="4" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, -1, 2.5, 2.5, 0], y: [0, -0.8, 2, 2, 0] }, { duration: 0.75, times }))}>
				<rect height="6" rx="1" width="8" x="11" y="14" />
			</motion.g>
		</>
	),
});
