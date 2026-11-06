import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const hoist = pose(
	{ rotate: [0, -9, 0], y: [0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.15, 1], ease: [snap, ring] },
);
const pocket = pose(
	{ rotate: [0, 0, 8.4, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const strap = pose(
	{ x: [0, 0, 0.9, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.25, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "backpack",
	render: (part) => (
		<motion.g {...part(hoist)} style={pivot(12, 2)}>
			<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
			<motion.g {...part(strap)}>
				<path d="M8 10h8" />
				<path d="M8 18h8" />
			</motion.g>
			<motion.path {...part(pocket)} d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" style={pivot(12, 14)} />
			<path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
		</motion.g>
	),
});
