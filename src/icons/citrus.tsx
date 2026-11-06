import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, 2.43, 0], scale: [1, 0.91, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "citrus",
	render: (part) => (
		<motion.g {...part(spin)} style={pivot(12, 12)}>
			<path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
			<motion.path {...part(redraw(0.35, 0.3))} d="m14 10-5.5 5.5" />
			<motion.path {...part(redraw(0.3, 0.35))} d="M14 17.85V10H6.15" />
		</motion.g>
	),
});
