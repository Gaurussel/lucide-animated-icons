import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, 2.7, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list-tree",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.4))} d="M3 6v4c0 1.1.9 2 2 2h3" />
			<motion.path {...part(redraw(0.1, 0.45))} d="M3 10v6c0 1.1.9 2 2 2h3" />
			<motion.path {...part(line(0))} d="M21 6H8" />
			<motion.path {...part(line(0.08))} d="M21 12h-8" />
			<motion.path {...part(line(0.16))} d="M21 18h-8" />
		</>
	),
});
