import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 1, -4, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -1, 1] },
	{ duration: 0.72, times: [0, 0.12, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const stem = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "spade",
	render: (part) => (
		<motion.g {...part(toss)}>
			<motion.g {...part(flip)} style={pivot(12, 12)}>
				<path d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
				<motion.path {...part(stem)} d="M12 18v4" />
			</motion.g>
		</motion.g>
	),
});
