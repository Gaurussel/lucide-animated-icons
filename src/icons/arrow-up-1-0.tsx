import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const cycle = (delay: number) =>
	pose({ y: [0, -3, 3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.5, delay, times: [0, 0.4, 0.41, 1] });

export default createAnimatedIcon({
	name: "arrow-up-1-0",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, -3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
			</motion.g>
			<motion.g {...part(cycle(0.1))}>
				<rect height="6" ry="2" width="4" x="15" y="14" />
			</motion.g>
			<motion.g {...part(cycle(0.22))}>
				<path d="M17 10V4h-2" />
				<path d="M15 10h4" />
			</motion.g>
		</>
	),
});
