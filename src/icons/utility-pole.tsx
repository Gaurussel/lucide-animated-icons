import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const sway = pose({ rotate: [0, -10, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const perch = (delay: number) =>
	pose({ y: [0, -2.5, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "utility-pole",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(12, 22)}>
			<path d="M12 2v20" />
			<path d="M2 5h20" />
			<motion.path {...part(perch(0.05))} d="M3 3v2" />
			<motion.path {...part(perch(0.12))} d="M7 3v2" />
			<motion.path {...part(perch(0.19))} d="M17 3v2" />
			<motion.path {...part(perch(0.26))} d="M21 3v2" />
			<path d="m19 5-7 7-7-7" />
		</motion.g>
	),
});
