import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const corner = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "minimize",
	render: (part) => (
		<>
			<motion.path {...part(corner(2.5, 2.5))} d="M8 3v3a2 2 0 0 1-2 2H3" />
			<motion.path {...part(corner(-2.5, 2.5))} d="M21 8h-3a2 2 0 0 1-2-2V3" />
			<motion.path {...part(corner(2.5, -2.5))} d="M3 16h3a2 2 0 0 1 2 2v3" />
			<motion.path {...part(corner(-2.5, -2.5))} d="M16 21v-3a2 2 0 0 1 2-2h3" />
		</>
	),
});
