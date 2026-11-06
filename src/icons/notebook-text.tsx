import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ y: [0, -2.4, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const coil = (delay: number) =>
	pose({ x: [0, -1.2, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "notebook-text",
	render: (part) => (
		<motion.g {...part(flip)} style={edge(0.5, 1)}>
			<rect height="20" rx="2" width="16" x="4" y="2" />
			<motion.path {...part(redraw(0.1, 0.35))} d="M9.5 8h5" />
			<motion.path {...part(redraw(0.18, 0.35))} d="M9.5 12H16" />
			<motion.path {...part(redraw(0.26, 0.35))} d="M9.5 16H14" />
			<motion.path {...part(coil(0.05))} d="M2 6h4" />
			<motion.path {...part(coil(0.1))} d="M2 10h4" />
			<motion.path {...part(coil(0.15))} d="M2 14h4" />
			<motion.path {...part(coil(0.2))} d="M2 18h4" />
		</motion.g>
	),
});
