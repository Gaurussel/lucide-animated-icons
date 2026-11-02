import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const hum = pose({ rotate: [0, -6, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const plate = pose(
	{ scale: [1, 0.7, 1], rotate: [0, 0, 360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "microwave",
	render: (part) => (
		<motion.g {...part(hum)} style={pivot(12, 21)}>
			<rect height="15" rx="2" width="20" x="2" y="4" />
			<motion.rect {...part(plate)} height="7" rx="1" style={centered} width="8" x="6" y="8" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M18 8v7" />
			<path d="M6 19v2" />
			<path d="M18 19v2" />
		</motion.g>
	),
});
