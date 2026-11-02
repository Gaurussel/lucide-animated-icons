import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, 4.5, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list-checks",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.45))} d="m3 7 2 2 4-4" />
			<motion.path {...part(redraw(0.15, 0.45))} d="m3 17 2 2 4-4" />
			<motion.path {...part(line(0.03))} d="M13 6h8" />
			<motion.path {...part(line(0.1))} d="M13 12h8" />
			<motion.path {...part(line(0.17))} d="M13 18h8" />
		</>
	),
});
