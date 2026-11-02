import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const align = (x: number, y: number, delay = 0) =>
	pose(
		{ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "align-horizontal-distribute-end",
	render: (part) => (
		<>
			<motion.g {...part(align(3, 0))}>
				<rect height="14" rx="2" width="6" x="4" y="5" />
				<path d="M10 2v20" />
			</motion.g>
			<motion.g {...part(align(-3, 0, 0.06))}>
				<rect height="10" rx="2" width="6" x="14" y="7" />
				<path d="M20 2v20" />
			</motion.g>
		</>
	),
});
