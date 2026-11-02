import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, -2, 4, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const shift = (delay: number) =>
	pose({ x: [0, 3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "indent-increase",
	render: (part) => (
		<>
			<motion.path {...part(shift(0.1))} d="M21 6H11" />
			<motion.path {...part(shift(0.15))} d="M21 12H11" />
			<motion.path {...part(shift(0.2))} d="M21 18H11" />
			<motion.path {...part(jab)} d="m3 8 4 4-4 4" />
		</>
	),
});
