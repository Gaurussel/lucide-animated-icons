import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, 1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list-todo",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.1, 0.65))} height="6" rx="1" style={edge(0.5, 1)} width="6" x="3" y="5" />
			<motion.path {...part(redraw(0.15, 0.45))} d="m3 17 2 2 4-4" />
			<motion.path {...part(line(0.03))} d="M13 6h8" />
			<motion.path {...part(line(0.1))} d="M13 12h8" />
			<motion.path {...part(line(0.17))} d="M13 18h8" />
		</>
	),
});
