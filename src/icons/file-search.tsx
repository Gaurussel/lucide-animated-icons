import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const zoom = pose(
	{ scale: [1, 1.21, 1], rotate: [0, -9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "file-search",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
			<motion.g {...part(zoom)} style={pivot(5, 14)}>
				<path d="m9 18-1.5-1.5" />
				<circle cx="5" cy="14" r="3" />
			</motion.g>
		</motion.g>
	),
});
