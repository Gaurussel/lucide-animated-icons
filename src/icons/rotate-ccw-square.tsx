import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const whip = pose(
	{ rotate: [0, 25, -360] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const tug = pose(
	{ rotate: [0, 0, -8.4, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "rotate-ccw-square",
	render: (part) => (
		<>
			<motion.g {...part(whip)} style={pivot(12, 12.5)}>
				<path d="M20 9V7a2 2 0 0 0-2-2h-6" />
				<path d="m15 2-3 3 3 3" />
			</motion.g>
			<motion.path
				{...part(tug)}
				d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"
				style={pivot(12, 12.5)}
			/>
		</>
	),
});
