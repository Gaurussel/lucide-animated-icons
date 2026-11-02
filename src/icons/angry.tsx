import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const fume = pose({ x: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, rubber] });
const brow = (degrees: number) =>
	pose({ rotate: [0, degrees, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "angry",
	render: (part) => (
		<motion.g {...part(fume)}>
			<circle cx="12" cy="12" r="10" />
			<path d="M16 16s-1.5-2-4-2-4 2-4 2" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<motion.path {...part(brow(25))} d="M7.5 8 10 9" style={pivot(10, 9)} />
			<motion.path {...part(brow(-25))} d="m14 9 2.5-1" style={pivot(14, 9)} />
		</motion.g>
	),
});
