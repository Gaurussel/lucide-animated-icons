import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const peek = pose(
	{ x: [0, -3, 2, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.4, 1], ease: [snap, "easeInOut", springy] },
);
const shell = pose(
	{ y: [0, 0, -2.5, 0], rotate: [0, 0, -8, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "turtle",
	render: (part) => (
		<>
			<motion.path {...part(peek)} d="M16.93 10H20a2 2 0 0 1 0 4H2" />
			<motion.g {...part(shell)} style={pivot(10, 18)}>
				<path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
				<path d="M4.82 7.9 8 10" />
				<path d="M15.18 7.9 12 10" />
			</motion.g>
		</>
	),
});
