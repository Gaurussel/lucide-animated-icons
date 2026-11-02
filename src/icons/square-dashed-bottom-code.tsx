import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const spread = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.68, times: [0, 0.28, 1], ease: [snap, springy] });
const bounce = (delay: number) =>
	pose({ y: [0, 0, 3, 0] }, { duration: 0.6, delay, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "square-dashed-bottom-code",
	render: (part) => (
		<>
			<motion.path {...part(spread(-1))} d="M10 9.5 8 12l2 2.5" />
			<motion.path {...part(spread(1))} d="m14 9.5 2 2.5-2 2.5" />
			<path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
			<motion.path {...part(bounce(0.1))} d="M9 21h1" />
			<motion.path {...part(bounce(0.18))} d="M14 21h1" />
		</>
	),
});
