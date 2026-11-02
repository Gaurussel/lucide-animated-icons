import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -4, 0], rotate: [0, -8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const phone = pose(
	{ y: [0, -5, 0], rotate: [0, 14, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "monitor-smartphone",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
				<path d="M10 19v-3.96 3.15" />
				<path d="M7 19h5" />
			</motion.g>
			<motion.rect {...part(phone)} height="10" rx="2" style={edge(0.5, 1)} width="6" x="16" y="12" />
		</>
	),
});
