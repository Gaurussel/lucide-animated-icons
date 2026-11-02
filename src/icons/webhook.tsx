import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const relay = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const twist = pose(
	{ rotate: [0, 0, -20, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "webhook",
	render: (part) => (
		<motion.g {...part(twist)} style={pivot(12, 13)}>
			<motion.path {...part(relay(-2, -2, 0))} d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<motion.path {...part(relay(2.5, 0.5, 0.08))} d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
			<motion.path
				{...part(relay(-1, 2.5, 0.16))}
				d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
			/>
		</motion.g>
	),
});
