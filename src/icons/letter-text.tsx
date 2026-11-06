import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const letter = pose(
	{ y: [0, -1.8, 0], scale: [1, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "letter-text",
	render: (part) => (
		<>
			<motion.g {...part(letter)} style={edge(0.5, 1)}>
				<path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" />
				<path d="M3.92 11h6.16" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.35))} d="M15 6h6" />
			<motion.path {...part(redraw(0.18, 0.35))} d="M15 12h6" />
			<motion.path {...part(redraw(0.26, 0.4))} d="M3 18h18" />
		</>
	),
});
