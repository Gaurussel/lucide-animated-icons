import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, 3.3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list-ordered",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.35))} d="M4 6h1v4" />
			<motion.path {...part(redraw(0.08, 0.3))} d="M4 10h2" />
			<motion.path {...part(redraw(0.16, 0.45))} d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
			<motion.path {...part(line(0.03))} d="M10 6h11" />
			<motion.path {...part(line(0.1))} d="M10 12h11" />
			<motion.path {...part(line(0.17))} d="M10 18h11" />
		</>
	),
});
