import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -0.9, 4.2, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const nudge = pose(
	{ y: [0, 0, -1.8, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const board = pose(
	{ rotate: [0, 0, 3, 0] },
	{ duration: 0.72, times: [0, 0.28, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "trello",
	render: (part) => (
		<motion.g {...part(board)} style={pivot(12, 21)}>
			<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
			<motion.rect {...part(nudge)} height="9" width="3" x="7" y="7" />
			<motion.rect {...part(drop)} height="5" width="3" x="14" y="7" />
		</motion.g>
	),
});
