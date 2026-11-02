import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const turn = (delay: number) =>
	pose(
		{ rotate: [0, 30, -360] },
		{ duration: 0.65, delay, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "refresh-ccw",
	render: (part) => (
		<>
			<motion.g {...part(turn(0))} style={pivot(12, 12)}>
				<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
				<path d="M3 3v5h5" />
			</motion.g>
			<motion.g {...part(turn(0.09))} style={pivot(12, 12)}>
				<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
				<path d="M16 16h5v5" />
			</motion.g>
		</>
	),
});
