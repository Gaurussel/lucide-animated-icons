import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const roll = (delay: number) =>
	pose({ x: [0, 1.5, 0], y: [0, -1.5, 0] }, { duration: 0.6, delay, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "train-track",
	render: (part) => (
		<>
			<path d="M2 17 17 2" />
			<motion.path {...part(roll(0.12))} d="m2 14 8 8" />
			<motion.path {...part(roll(0.09))} d="m5 11 8 8" />
			<motion.path {...part(roll(0.06))} d="m8 8 8 8" />
			<motion.path {...part(roll(0.03))} d="m11 5 8 8" />
			<motion.path {...part(roll(0))} d="m14 2 8 8" />
			<path d="M7 22 22 7" />
		</>
	),
});
