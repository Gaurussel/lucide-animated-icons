import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const zoom = pose(
	{ scale: [1, 1.35, 1], rotate: [0, -15, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "file-search-2",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.g {...part(zoom)} style={pivot(11.5, 14.5)}>
				<circle cx="11.5" cy="14.5" r="2.5" />
				<path d="M13.3 16.3 15 18" />
			</motion.g>
		</motion.g>
	),
});
