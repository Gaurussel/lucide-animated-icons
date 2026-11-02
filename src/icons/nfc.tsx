import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const wave = (delay: number) =>
	pose({ x: [0, 3, 0], opacity: [1, 0.2, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "nfc",
	render: (part) => (
		<>
			<motion.path {...part(wave(0))} d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
			<motion.path {...part(wave(0.06))} d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
			<motion.path {...part(wave(0.12))} d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
			<motion.path {...part(wave(0.18))} d="M16.37 2a20.16 20.16 0 0 1 0 20" />
		</>
	),
});
