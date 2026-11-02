import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const cycle = (delay: number) =>
	pose({ y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] }, { duration: 0.5, delay, times: [0, 0.4, 0.41, 1] });

export default createAnimatedIcon({
	name: "arrow-down-a-z",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.g {...part(cycle(0.1))}>
				<path d="M20 8h-5" />
				<path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
			</motion.g>
			<motion.g {...part(cycle(0.22))}>
				<path d="M15 14h5l-5 6h5" />
			</motion.g>
		</>
	),
});
