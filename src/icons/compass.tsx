import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const seek = pose(
	{ rotate: [0, -45, 360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const housing = pose(
	{ scale: [1, 1, 1.1, 1], rotate: [0, 0, 8, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "compass",
	render: (part) => (
		<motion.g {...part(housing)} style={pivot(12, 12)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path
				{...part(seek)}
				d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
				style={pivot(12, 12)}
			/>
		</motion.g>
	),
});
