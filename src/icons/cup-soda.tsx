import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const straw = pose({ y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const sip = pose({ rotate: [0, -14, 0], y: [0, -2, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const slosh = pose({ x: [0, -3, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "cup-soda",
	render: (part) => (
		<motion.g {...part(sip)} style={pivot(12, 22)}>
			<path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
			<path d="M5 8h14" />
			<motion.path {...part(slosh)} d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
			<motion.path {...part(straw)} d="m12 8 1-6h2" />
		</motion.g>
	),
});
