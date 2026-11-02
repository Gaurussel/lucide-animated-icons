import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const scrub = pose(
	{ x: [0, -3, 3, 0], rotate: [0, 6, -6, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.42, 1], ease: [snap, "easeInOut", springy] },
);
const bristles = pose(
	{ rotate: [0, 20, -20, 0] },
	{ duration: 0.75, delay: 0.08, times: [0, 0.2, 0.42, 1], ease: ["easeInOut", "easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "brush-cleaning",
	render: (part) => (
		<motion.g {...part(scrub)} style={pivot(12, 2)}>
			<path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1" />
			<path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z" />
			<motion.path {...part(bristles)} d="m16 22-1-4" style={pivot(15, 18)} />
			<motion.path {...part(bristles)} d="m8 22 1-4" style={pivot(9, 18)} />
		</motion.g>
	),
});
