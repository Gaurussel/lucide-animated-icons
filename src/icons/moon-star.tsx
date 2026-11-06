import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rock = pose(
	{ y: [0, -2.4, 0], rotate: [0, -24, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] },
);
const twinkle = pose(
	{ scale: [1, 0.64, 1.24, 1], rotate: [0, 0, -14, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: [snap, "easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "moon-star",
	render: (part) => (
		<>
			<motion.path {...part(rock)} d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" style={pivot(12, 12)} />
			<motion.g {...part(twinkle)} style={centered}>
				<path d="M20 3v4" />
				<path d="M22 5h-4" />
			</motion.g>
		</>
	),
});
