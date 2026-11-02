import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const burst = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, -0.5 * x, 2.5 * x, 0], y: [0, -0.5 * y, 2.5 * y, 0] },
		{ duration: 0.62, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "square-dashed",
	render: (part) => (
		<>
			<motion.path {...part(burst(-1, -1, 0))} d="M5 3a2 2 0 0 0-2 2" />
			<motion.path {...part(burst(1, -1, 0))} d="M19 3a2 2 0 0 1 2 2" />
			<motion.path {...part(burst(1, 1, 0))} d="M21 19a2 2 0 0 1-2 2" />
			<motion.path {...part(burst(-1, 1, 0))} d="M5 21a2 2 0 0 1-2-2" />
			<motion.path {...part(burst(0, -1, 0.08))} d="M9 3h1" />
			<motion.path {...part(burst(0, 1, 0.08))} d="M9 21h1" />
			<motion.path {...part(burst(0, -1, 0.08))} d="M14 3h1" />
			<motion.path {...part(burst(0, 1, 0.08))} d="M14 21h1" />
			<motion.path {...part(burst(-1, 0, 0.08))} d="M3 9v1" />
			<motion.path {...part(burst(1, 0, 0.08))} d="M21 9v1" />
			<motion.path {...part(burst(-1, 0, 0.08))} d="M3 14v1" />
			<motion.path {...part(burst(1, 0, 0.08))} d="M21 14v1" />
		</>
	),
});
