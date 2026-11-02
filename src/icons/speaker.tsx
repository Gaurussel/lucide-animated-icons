import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const boom = pose(
	{ scale: [1, 1.3, 0.9, 1.2, 1] },
	{ duration: 0.72, times: [0, 0.12, 0.25, 0.38, 1], ease: [snap, "easeInOut", "easeInOut", springy] },
);
const tweet = pose(
	{ scale: [1, 1, 2.5, 1] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, ring] },
);
const rattle = pose(
	{ rotate: [0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.28, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "speaker",
	render: (part) => (
		<motion.g {...part(rattle)} style={pivot(12, 22)}>
			<rect height="20" rx="2" width="16" x="4" y="2" />
			<motion.path {...part(tweet)} d="M12 6h.01" style={centered} />
			<motion.g {...part(boom)} style={centered}>
				<circle cx="12" cy="14" r="4" />
				<path d="M12 14h.01" />
			</motion.g>
		</motion.g>
	),
});
