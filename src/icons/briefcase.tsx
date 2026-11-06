import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const swing = pose(
	{ rotate: [0, 0, -9.6, 0] },
	{ duration: 0.75, delay: 0.06, times: [0, 0.2, 0.36, 1], ease: ["easeInOut", "easeOut", ring] },
);
const sag = pose(
	{ y: [0, 0, 0.9, 0] },
	{ duration: 0.7, delay: 0.1, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "briefcase",
	render: (part) => (
		<motion.g {...part(lift)}>
			<motion.g {...part(swing)} style={pivot(12, 2)}>
				<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
				<motion.rect {...part(sag)} height="14" rx="2" width="20" x="2" y="6" />
			</motion.g>
		</motion.g>
	),
});
