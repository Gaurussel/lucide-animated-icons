import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const carry = pose(
	{ y: [0, -2.4, 0], rotate: [0, -9.6, 0] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] },
);
const clasp = pose(
	{ scale: [1, 1, 2.2, 1] },
	{ duration: 0.7, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "briefcase-business",
	render: (part) => (
		<motion.g {...part(carry)} style={pivot(12, 2)}>
			<motion.path {...part(clasp)} d="M12 12h.01" style={centered} />
			<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
			<path d="M22 13a18.15 18.15 0 0 1-20 0" />
			<rect height="14" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
