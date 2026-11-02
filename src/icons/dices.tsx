import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const roll = pose(
	{ y: [0, -5, 0], rotate: [0, 200, 360] },
	{ duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy], reset: true },
);
const bump = pose(
	{ y: [0, -3, 0], rotate: [0, 15, 0] },
	{ duration: 0.65, delay: 0.08, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "dices",
	render: (part) => (
		<>
			<motion.g {...part(bump)} style={pivot(16, 9)}>
				<path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
				<path d="M15 6h.01" />
				<path d="M18 9h.01" />
			</motion.g>
			<motion.g {...part(roll)} style={pivot(8, 16)}>
				<rect height="12" rx="2" ry="2" width="12" x="2" y="10" />
				<path d="M6 18h.01" />
				<path d="M10 14h.01" />
			</motion.g>
		</>
	),
});
