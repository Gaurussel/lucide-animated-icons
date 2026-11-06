import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const pump = pose(
	{ y: [0, 0.6, -3, 0], rotate: [0, 0, -9, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const plate = pose(
	{ rotate: [0, 0, 8.4, 0] },
	{ duration: 0.7, delay: 0.1, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "dumbbell",
	render: (part) => (
		<motion.g {...part(pump)} style={pivot(12, 12)}>
			<path d="m2.5 21.5 1.4-1.4" />
			<path d="m20.1 3.9 1.4-1.4" />
			<path d="m9.6 14.4 4.8-4.8" />
			<motion.path
				{...part(plate)}
				d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"
				style={pivot(17.5, 6.5)}
			/>
			<motion.path
				{...part(plate)}
				d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"
				style={pivot(6.5, 17.5)}
			/>
		</motion.g>
	),
});
