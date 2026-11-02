import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const scatter = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-square-dashed",
	render: (part) => (
		<>
			<motion.path {...part(scatter(-2, 2))} d="M10 17H7l-4 4v-7" />
			<motion.path {...part(scatter(0, 3))} d="M14 17h1" />
			<motion.path {...part(scatter(0, -3))} d="M14 3h1" />
			<motion.path {...part(scatter(2, -2))} d="M19 3a2 2 0 0 1 2 2" />
			<motion.path {...part(scatter(2, 2))} d="M21 14v1a2 2 0 0 1-2 2" />
			<motion.path {...part(scatter(3, 0))} d="M21 9v1" />
			<motion.path {...part(scatter(-3, 0))} d="M3 9v1" />
			<motion.path {...part(scatter(-2, -2))} d="M5 3a2 2 0 0 0-2 2" />
			<motion.path {...part(scatter(0, -3))} d="M9 3h1" />
		</>
	),
});
