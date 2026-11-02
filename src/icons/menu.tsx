import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const slat = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "menu",
	render: (part) => (
		<>
			<motion.path {...part(slat(-5.5, 0))} d="M4 6h16" />
			<motion.path {...part(slat(5.5, 0.07))} d="M4 12h16" />
			<motion.path {...part(slat(-5.5, 0.14))} d="M4 18h16" />
		</>
	),
});
