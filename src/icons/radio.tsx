import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const wave = (x: number, delay: number) =>
	pose({ x: [0, x, 0], opacity: [1, 0.3, 1] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const core = pose({ scale: [1, 1.48, 1] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "radio",
	render: (part) => (
		<>
			<motion.path {...part(wave(2, 0))} d="M16.247 7.761a6 6 0 0 1 0 8.478" />
			<motion.path {...part(wave(3, 0.1))} d="M19.075 4.933a10 10 0 0 1 0 14.134" />
			<motion.path {...part(wave(-3, 0.1))} d="M4.925 19.067a10 10 0 0 1 0-14.134" />
			<motion.path {...part(wave(-2, 0))} d="M7.753 16.239a6 6 0 0 1 0-8.478" />
			<motion.circle {...part(core)} cx="12" cy="12" r="2" style={centered} />
		</>
	),
});
