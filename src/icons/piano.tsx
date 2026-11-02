import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const key = (delay: number) =>
	pose({ y: [0, 3, 0] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const chord = pose(
	{ y: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.52, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "piano",
	render: (part) => (
		<motion.g {...part(chord)}>
			<path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
			<path d="M2 14h20" />
			<motion.path {...part(key(0))} d="M6 14v4" />
			<motion.path {...part(key(0.07))} d="M10 14v4" />
			<motion.path {...part(key(0.14))} d="M14 14v4" />
			<motion.path {...part(key(0.21))} d="M18 14v4" />
		</motion.g>
	),
});
