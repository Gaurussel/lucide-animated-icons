import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, 0.6, -3, 0], rotate: [0, 0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const ear = pose({ rotate: [0, 18, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "rabbit",
	render: (part) => (
		<motion.g {...part(bounce)} style={pivot(14, 21)}>
			<path d="M13 16a3 3 0 0 1 2.24 5" />
			<path d="M18 12h.01" />
			<path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
			<motion.path {...part(ear)} d="M20 8.54V4a2 2 0 1 0-4 0v3" style={pivot(18, 8)} />
			<path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
		</motion.g>
	),
});
