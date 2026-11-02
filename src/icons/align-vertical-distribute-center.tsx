import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const align = (x: number, y: number, delay = 0) =>
	pose(
		{ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "align-vertical-distribute-center",
	render: (part) => (
		<>
			<motion.g {...part(align(0, -3))}>
				<rect height="6" rx="2" width="14" x="5" y="14" />
				<path d="M22 17h-3" />
				<path d="M5 17H2" />
			</motion.g>
			<motion.g {...part(align(0, 3, 0.06))}>
				<rect height="6" rx="2" width="10" x="7" y="4" />
				<path d="M22 7h-5" />
				<path d="M7 7H2" />
			</motion.g>
		</>
	),
});
