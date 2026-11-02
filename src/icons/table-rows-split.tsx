import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const apart = (direction: number) =>
	pose({ y: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const dash = (delay: number) =>
	pose({ x: [0, 2, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "table-rows-split",
	render: (part) => (
		<>
			<motion.path {...part(dash(0.15))} d="M14 10h2" />
			<motion.path {...part(dash(0))} d="M2 10h2" />
			<motion.path {...part(dash(0.2))} d="M20 10h2" />
			<motion.path {...part(dash(0.05))} d="M8 10h2" />
			<motion.g {...part(apart(1))}>
				<path d="M15 22v-8" />
				<path d="M3 19h18" />
				<path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
				<path d="M9 22v-8" />
			</motion.g>
			<motion.g {...part(apart(-1))}>
				<path d="M15 2v4" />
				<path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
				<path d="M9 2v4" />
			</motion.g>
		</>
	),
});
