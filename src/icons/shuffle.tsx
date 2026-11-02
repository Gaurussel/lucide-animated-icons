import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const head = (delay: number) =>
	pose({ x: [0, 0, 3, 0] }, { duration: 0.7, delay, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "shuffle",
	render: (part) => (
		<>
			<motion.path {...part(head(0.04))} d="m18 14 4 4-4 4" />
			<motion.path {...part(head(0))} d="m18 2 4 4-4 4" />
			<motion.path {...part(redraw(0, 0.45))} d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
			<motion.path {...part(redraw(0, 0.2))} d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
			<motion.path {...part(redraw(0.2, 0.25))} d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
		</>
	),
});
