import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ y: [0, -3, 0], rotate: [0, -14, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "ticket",
	render: (part) => (
		<motion.g {...part(flip)} style={centered}>
			<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M13 5v2" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M13 11v2" />
			<motion.path {...part(redraw(0.26, 0.4))} d="M13 17v2" />
		</motion.g>
	),
});
