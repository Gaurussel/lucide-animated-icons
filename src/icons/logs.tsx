import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const row = (delay: number) =>
	pose({ x: [0, 4, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "logs",
	render: (part) => (
		<>
			<motion.g {...part(row(0))}>
				<path d="M3 6h1" />
				<path d="M8 6h1" />
				<path d="M13 6h8" />
			</motion.g>
			<motion.g {...part(row(0.07))}>
				<path d="M3 12h1" />
				<path d="M8 12h1" />
				<path d="M13 12h8" />
			</motion.g>
			<motion.g {...part(row(0.14))}>
				<path d="M3 18h1" />
				<path d="M8 18h1" />
				<path d="M13 18h8" />
			</motion.g>
		</>
	),
});
