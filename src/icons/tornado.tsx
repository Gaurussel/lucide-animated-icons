import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap } from "../helpers.ts";

const swirl = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "tornado",
	render: (part) => (
		<>
			<motion.path {...part(swirl(-3, 0))} d="M21 4H3" />
			<motion.path {...part(swirl(3, 0.03))} d="M18 8H6" />
			<motion.path {...part(swirl(-3, 0.06))} d="M19 12H9" />
			<motion.path {...part(swirl(3, 0.09))} d="M16 16h-6" />
			<motion.path {...part(swirl(-3, 0.12))} d="M11 20H9" />
		</>
	),
});
