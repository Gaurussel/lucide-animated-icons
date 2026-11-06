import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, ring, springy } from "../helpers.ts";

const ride = pose(
	{ x: [0, -0.6, 1.8, 0], rotate: [0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const handle = pose(
	{ rotate: [0, 0, 12, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.42, 1], ease: ["easeInOut", "easeInOut", ring] },
);
const roll = pose(
	{ x: [0, -0.6, 0.6, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "baggage-claim",
	render: (part) => (
		<>
			<motion.g {...part(roll)}>
				<path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
				<circle cx="18" cy="20" r="2" />
				<circle cx="9" cy="20" r="2" />
			</motion.g>
			<motion.g {...part(ride)} style={edge(0.5, 1)}>
				<motion.path {...part(handle)} d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" style={pivot(14.5, 6)} />
				<rect height="8" rx="1" width="13" x="8" y="6" />
			</motion.g>
		</>
	),
});
