import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const swing = (pull: number, push: number, delay: number) =>
	pose({ y: [0, pull, push, 0] }, { duration: 0.55, delay, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "arrow-up-down",
	render: (part) => (
		<>
			<motion.g {...part(swing(1.5, -3, 0))}>
				<path d="m3 8 4-4 4 4" />
				<path d="M7 4v16" />
			</motion.g>
			<motion.g {...part(swing(-1.5, 3, 0.15))}>
				<path d="m21 16-4 4-4-4" />
				<path d="M17 20V4" />
			</motion.g>
		</>
	),
});
