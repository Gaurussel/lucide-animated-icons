import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -4, 0], rotate: [0, -12, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "newspaper",
	render: (part) => (
		<motion.g {...part(toss)} style={edge(0.5, 1)}>
			<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
			<motion.rect {...part(jelly(0.3, 0.7))} height="4" rx="1" style={edge(0.5, 1)} width="8" x="10" y="6" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M18 14h-8" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M15 18h-5" />
		</motion.g>
	),
});
