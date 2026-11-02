import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, -30, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const clapper = pose({ x: [0, -3, 0] }, { duration: 0.75, times: [0, 0.14, 1], ease: [snap, ring] });
const cross = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "bell-plus",
	render: (part) => (
		<>
			<motion.g {...part(swing)} style={pivot(12, 2)}>
				<motion.path {...part(clapper)} d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
			</motion.g>
			<motion.g {...part(cross)} style={pivot(18, 8)}>
				<path d="M15 8h6" />
				<path d="M18 5v6" />
			</motion.g>
		</>
	),
});
