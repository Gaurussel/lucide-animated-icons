import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const hopUp = pose(
	{ y: [0, -2.4, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const wag = pose(
	{ rotate: [0, 24, -15, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "piggy-bank",
	render: (part) => (
		<motion.g {...part(hopUp)} style={pivot(12, 20)}>
			<path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" />
			<path d="M16 10h.01" />
			<motion.path {...part(wag)} d="M2 8v1a2 2 0 0 0 2 2h1" style={pivot(5, 11)} />
		</motion.g>
	),
});
