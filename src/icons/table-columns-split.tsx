import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const apart = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const dash = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "table-columns-split",
	render: (part) => (
		<>
			<motion.path {...part(dash(0.15))} d="M14 14v2" />
			<motion.path {...part(dash(0.2))} d="M14 20v2" />
			<motion.path {...part(dash(0.05))} d="M14 2v2" />
			<motion.path {...part(dash(0.1))} d="M14 8v2" />
			<motion.g {...part(apart(-1))}>
				<path d="M2 15h8" />
				<path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
				<path d="M2 9h8" />
				<path d="M5 3v18" />
			</motion.g>
			<motion.g {...part(apart(1))}>
				<path d="M22 15h-4" />
				<path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
				<path d="M22 9h-4" />
			</motion.g>
		</>
	),
});
