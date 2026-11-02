import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const reach = (x: number, y: number) =>
	pose({ x: [0, 2 * x, 0], y: [0, 2 * y, 0] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "slack",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(12, 12)}>
			<motion.g {...part(reach(0, -1))}>
				<rect height="8" rx="1.5" width="3" x="13" y="2" />
				<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
			</motion.g>
			<motion.g {...part(reach(0, 1))}>
				<rect height="8" rx="1.5" width="3" x="8" y="14" />
				<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
			</motion.g>
			<motion.g {...part(reach(1, 0))}>
				<rect height="3" rx="1.5" width="8" x="14" y="13" />
				<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
			</motion.g>
			<motion.g {...part(reach(-1, 0))}>
				<rect height="3" rx="1.5" width="8" x="2" y="8" />
				<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
			</motion.g>
		</motion.g>
	),
});
