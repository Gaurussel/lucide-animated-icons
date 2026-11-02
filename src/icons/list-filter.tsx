import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const sift = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "list-filter",
	render: (part) => (
		<>
			<motion.path {...part(sift(-4, 0))} d="M3 6h18" />
			<motion.path {...part(sift(4, 0.07))} d="M7 12h10" />
			<motion.path {...part(sift(-4, 0.14))} d="M10 18h4" />
		</>
	),
});
