import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const turnKey = pose({ rotate: [0, -36, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-key",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.g {...part(turnKey)} style={pivot(10, 16)}>
				<circle cx="10" cy="16" r="2" />
				<path d="m16 10-4.5 4.5" />
				<path d="m15 11 1 1" />
			</motion.g>
		</motion.g>
	),
});
