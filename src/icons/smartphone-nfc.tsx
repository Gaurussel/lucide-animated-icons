import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const tap = pose({ rotate: [0, -20, 0], x: [0, 2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const wave = (delay: number) =>
	pose(
		{ x: [0, -3, 0], opacity: [1, 0, 1] },
		{ duration: 0.55, delay, times: [0, 0.25, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "smartphone-nfc",
	render: (part) => (
		<>
			<motion.rect {...part(tap)} height="12" rx="1" style={pivot(5.5, 18)} width="7" x="2" y="6" />
			<motion.path {...part(wave(0.05))} d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
			<motion.path {...part(wave(0.12))} d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
			<motion.path {...part(wave(0.19))} d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
		</>
	),
});
