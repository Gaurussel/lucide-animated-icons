import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const bob = pose(
	{ y: [0, -1.8, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "file-music",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" />
			<motion.g {...part(bob)} style={pivot(11, 18)}>
				<path d="M8 18v-7.7L16 9v7" />
				<circle cx="14" cy="16" r="2" />
				<circle cx="6" cy="18" r="2" />
			</motion.g>
		</motion.g>
	),
});
