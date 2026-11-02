import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const roll = pose(
	{ rotate: [0, -15, 10, 0], x: [0, -2, 1, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.5, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const hoop = pose(
	{ y: [0, 0, 1.5, -1, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.35, 0.5, 1], ease: ["easeInOut", snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "barrel",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(12, 21)}>
			<path d="M10 3a41 41 0 0 0 0 18" />
			<path d="M14 3a41 41 0 0 1 0 18" />
			<path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" />
			<motion.g {...part(hoop)}>
				<path d="M3.84 17h16.32" />
				<path d="M3.84 7h16.32" />
			</motion.g>
		</motion.g>
	),
});
