import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const align = (x: number, y: number, delay = 0) =>
	pose(
		{ ...(x ? { x: [0, x, 0] } : {}), ...(y ? { y: [0, y, 0] } : {}) },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);
const plate = pose(
	{ x: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "align-horizontal-justify-end",
	render: (part) => (
		<>
			<motion.rect {...part(align(3.5, 0))} height="10" rx="2" width="6" x="12" y="7" />
			<motion.rect {...part(align(3.5, 0, 0.08))} height="14" rx="2" width="6" x="2" y="5" />
			<motion.path {...part(plate)} d="M22 2v20" />
		</>
	),
});
