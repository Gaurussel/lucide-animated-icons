import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const corner = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "maximize",
	render: (part) => (
		<>
			<motion.path {...part(corner(-3, -3))} d="M8 3H5a2 2 0 0 0-2 2v3" />
			<motion.path {...part(corner(3, -3))} d="M21 8V5a2 2 0 0 0-2-2h-3" />
			<motion.path {...part(corner(-3, 3))} d="M3 16v3a2 2 0 0 0 2 2h3" />
			<motion.path {...part(corner(3, 3))} d="M16 21h3a2 2 0 0 0 2-2v-3" />
		</>
	),
});
