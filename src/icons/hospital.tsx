import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "hospital",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.g {...part(jelly(0.44, 0.65))} style={edge(0.5, 1)}>
				<path d="M14 14h-4" />
				<path d="M14 18h-4" />
				<path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
				<path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
			</motion.g>
			<motion.g {...part(twist)} style={pivot(12, 8)}>
				<path d="M12 6v4" />
				<path d="M14 8h-4" />
			</motion.g>
		</motion.g>
	),
});
