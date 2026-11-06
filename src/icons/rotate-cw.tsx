import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const turn = (delay: number) =>
	pose(
		{ rotate: [0, -30, 360], scale: [1, 0.91, 1] },
		{ duration: 0.65, delay, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "rotate-cw",
	render: (part) => (
		<>
			<motion.path
				{...part(turn(0.08))}
				d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(turn(0))} d="M21 3v5h-5" style={pivot(12, 12)} />
		</>
	),
});
