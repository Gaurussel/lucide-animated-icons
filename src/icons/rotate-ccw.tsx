import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const turn = (delay: number) =>
	pose(
		{ rotate: [0, 30, -360], scale: [1, 0.85, 1] },
		{ duration: 0.65, delay, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "rotate-ccw",
	render: (part) => (
		<>
			<motion.path
				{...part(turn(0.08))}
				d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(turn(0))} d="M3 3v5h5" style={pivot(12, 12)} />
		</>
	),
});
