import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const raise = (y: number, delay: number) =>
	pose({ y: [0, y, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const pull = pose({ y: [0, 1.8, 0] }, { duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "blinds",
	render: (part) => (
		<>
			<path d="M3 3h18" />
			<motion.path {...part(raise(-2, 0.08))} d="M20 7H8" />
			<motion.path {...part(raise(-4, 0.11))} d="M20 11H8" />
			<motion.path {...part(raise(-6, 0.14))} d="M8 15h12" />
			<motion.path {...part(raise(-8, 0.17))} d="M10 19h10" />
			<motion.g {...part(pull)}>
				<path d="M4 3v14" />
				<circle cx="4" cy="19" r="2" />
			</motion.g>
		</>
	),
});
