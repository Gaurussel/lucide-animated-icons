import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, -25, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const ray = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "currency",
	render: (part) => (
		<motion.g {...part(spin)} style={pivot(12, 12)}>
			<circle cx="12" cy="12" r="8" />
			<motion.line {...part(ray(-2.5, -2.5, 0.12))} x1="3" x2="6" y1="3" y2="6" />
			<motion.line {...part(ray(2.5, -2.5, 0.18))} x1="21" x2="18" y1="3" y2="6" />
			<motion.line {...part(ray(2.5, 2.5, 0.24))} x1="21" x2="18" y1="21" y2="18" />
			<motion.line {...part(ray(-2.5, 2.5, 0.3))} x1="3" x2="6" y1="21" y2="18" />
		</motion.g>
	),
});
