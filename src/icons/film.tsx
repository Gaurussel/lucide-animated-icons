import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const roll = pose(
	{ rotate: [0, -16, 0], x: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const advance = pose({ y: [0, 4.5, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "film",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(3, 21)}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<path d="M7 3v18" />
			<path d="M17 3v18" />
			<path d="M3 12h18" />
			<motion.g {...part(advance)}>
				<path d="M3 7.5h4" />
				<path d="M3 16.5h4" />
				<path d="M17 7.5h4" />
				<path d="M17 16.5h4" />
			</motion.g>
		</motion.g>
	),
});
