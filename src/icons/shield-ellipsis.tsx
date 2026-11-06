import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const raise = pose(
	{ y: [0, -1.8, 0], rotate: [0, -8.4, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const bob = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "shield-ellipsis",
	render: (part) => (
		<motion.g {...part(raise)} style={pivot(12, 22)}>
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
			<motion.path {...part(bob(0.1))} d="M8 12h.01" />
			<motion.path {...part(bob(0.17))} d="M12 12h.01" />
			<motion.path {...part(bob(0.24))} d="M16 12h.01" />
		</motion.g>
	),
});
