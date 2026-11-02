import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const roll = (delay: number) =>
	pose({ y: [0, -4, 4, 0], opacity: [1, 0, 0, 1] }, { duration: 0.45, delay, times: [0, 0.4, 0.41, 1] });

export default createAnimatedIcon({
	name: "binary",
	render: (part) => (
		<>
			<motion.g {...part(roll(0))}>
				<rect height="6" rx="2" width="4" x="6" y="4" />
			</motion.g>
			<motion.g {...part(roll(0.08))}>
				<path d="M14 10h4" />
				<path d="M14 4h2v6" />
			</motion.g>
			<motion.g {...part(roll(0.16))}>
				<path d="M6 20h4" />
				<path d="M6 14h2v6" />
			</motion.g>
			<motion.g {...part(roll(0.24))}>
				<rect height="6" rx="2" width="4" x="14" y="14" />
			</motion.g>
		</>
	),
});
