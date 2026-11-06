import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, 1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const fold = (direction: number) =>
	pose({ y: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list-collapse",
	render: (part) => (
		<>
			<motion.path {...part(fold(1))} d="m3 10 3-3-3-3" />
			<motion.path {...part(fold(-1))} d="m3 20 3-3-3-3" />
			<motion.path {...part(line(0.03))} d="M10 6h11" />
			<motion.path {...part(line(0.1))} d="M10 12h11" />
			<motion.path {...part(line(0.17))} d="M10 18h11" />
		</>
	),
});
