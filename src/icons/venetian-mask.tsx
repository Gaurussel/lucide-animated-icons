import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -8.4, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "venetian-mask",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 12)}>
			<motion.path {...part(redraw(0.2, 0.45))} d="M18 11c-1.5 0-2.5.5-3 2" />
			<path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
			<motion.path {...part(redraw(0.2, 0.45))} d="M6 11c1.5 0 2.5.5 3 2" />
		</motion.g>
	),
});
