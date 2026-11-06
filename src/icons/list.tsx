import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, 1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const dot = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list",
	render: (part) => (
		<>
			<motion.path {...part(dot(0))} d="M3 6h.01" />
			<motion.path {...part(dot(0.07))} d="M3 12h.01" />
			<motion.path {...part(dot(0.14))} d="M3 18h.01" />
			<motion.path {...part(line(0.03))} d="M8 6h13" />
			<motion.path {...part(line(0.1))} d="M8 12h13" />
			<motion.path {...part(line(0.17))} d="M8 18h13" />
		</>
	),
});
