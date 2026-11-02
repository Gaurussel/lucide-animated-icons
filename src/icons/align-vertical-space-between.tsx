import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const align = (x: number, y: number, delay = 0) =>
	pose(
		{ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "align-vertical-space-between",
	render: (part) => (
		<>
			<motion.rect {...part(align(0, 4))} height="6" rx="2" width="10" x="7" y="3" />
			<motion.rect {...part(align(0, -4))} height="6" rx="2" width="14" x="5" y="15" />
			<path d="M2 21h20" />
			<path d="M2 3h20" />
		</>
	),
});
