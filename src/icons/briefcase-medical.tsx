import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const carry = pose({ y: [0, -4, 0], rotate: [0, -16, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "briefcase-medical",
	render: (part) => (
		<motion.g {...part(carry)} style={pivot(12, 2)}>
			<motion.g {...part(twist)} style={pivot(12, 13)}>
				<path d="M12 11v4" />
				<path d="M14 13h-4" />
			</motion.g>
			<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
			<path d="M18 6v14" />
			<path d="M6 6v14" />
			<rect height="14" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
