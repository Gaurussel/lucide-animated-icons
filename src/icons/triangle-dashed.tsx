import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const scatter = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "triangle-dashed",
	render: (part) => (
		<>
			<motion.path {...part(scatter(0, -3, 0))} d="M10.17 4.193a2 2 0 0 1 3.666.013" />
			<motion.path {...part(scatter(2.5, -1.5, 0.03))} d="m15.874 7.743 1 1.732" />
			<motion.path {...part(scatter(2.5, -1.5, 0.06))} d="m18.849 12.952 1 1.732" />
			<motion.path {...part(scatter(2.5, 2, 0.09))} d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
			<motion.path {...part(scatter(0, 3, 0.12))} d="M14 21h2" />
			<motion.path {...part(scatter(0, 3, 0.15))} d="M8 21h2" />
			<motion.path {...part(scatter(-2.5, 2, 0.18))} d="M4.024 21a2 2 0 0 1-1.839-2.839" />
			<motion.path {...part(scatter(-2.5, -1.5, 0.21))} d="m5.136 12.952-1 1.732" />
			<motion.path {...part(scatter(-2.5, -1.5, 0.24))} d="m8.102 7.743-1 1.732" />
		</>
	),
});
