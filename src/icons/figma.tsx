import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const spread = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "figma",
	render: (part) => (
		<>
			<motion.path {...part(spread(-2, -2.5))} d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
			<motion.path {...part(spread(2, -2.5))} d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
			<motion.path {...part(spread(2.5, 0))} d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
			<motion.path {...part(spread(-2.5, 0))} d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
			<motion.path {...part(spread(-2, 2.5))} d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
		</>
	),
});
