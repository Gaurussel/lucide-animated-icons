import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, springy } from "../helpers.ts";

const flip = pose(
	{ y: [0, 1, -5, 0], rotate: [0, 10, -180, -360] },
	{ duration: 0.75, times: [0, 0.12, 0.4, 1], ease: ["easeInOut", "easeOut", springy], reset: true },
);
const bone = pose(
	{ rotate: [0, 0, 18, 0] },
	{ duration: 0.7, delay: 0.08, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "drumstick",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 12)}>
			<path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" />
			<motion.path
				{...part(bone)}
				d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"
				style={pivot(10, 14)}
			/>
		</motion.g>
	),
});
