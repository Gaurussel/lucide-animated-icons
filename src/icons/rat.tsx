import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const scurry = (delay: number) =>
	pose(
		{ x: [0, -2, 9, -9, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.14, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "rat",
	render: (part) => (
		<>
			<motion.path {...part(scurry(0.08))} d="M13 22H4a2 2 0 0 1 0-4h12" />
			<motion.g {...part(scurry(0))}>
				<path d="M13.236 18a3 3 0 0 0-2.2-5" />
				<path d="M16 9h.01" />
				<path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" />
				<path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />
			</motion.g>
		</>
	),
});
