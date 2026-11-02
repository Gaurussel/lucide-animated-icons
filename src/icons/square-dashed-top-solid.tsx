import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -15, 0] },
	{ duration: 0.68, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const wave = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.35, delay, times: [0, 0.4, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-dashed-top-solid",
	render: (part) => (
		<>
			<motion.path {...part(lid)} d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" style={pivot(3, 5)} />
			<motion.path {...part(wave(0.1))} d="M3 9v1" />
			<motion.path {...part(wave(0.15))} d="M3 14v1" />
			<motion.path {...part(wave(0.2))} d="M5 21a2 2 0 0 1-2-2" />
			<motion.path {...part(wave(0.24))} d="M9 21h1" />
			<motion.path {...part(wave(0.28))} d="M14 21h1" />
			<motion.path {...part(wave(0.32))} d="M21 19a2 2 0 0 1-2 2" />
			<motion.path {...part(wave(0.36))} d="M21 14v1" />
			<motion.path {...part(wave(0.4))} d="M21 9v1" />
		</>
	),
});
