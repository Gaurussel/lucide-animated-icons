import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -4, 0], rotate: [0, -12, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "dollar-sign",
	render: (part) => (
		<motion.g {...part(toss)}>
			<line x1="12" x2="12" y1="2" y2="22" />
			<motion.path {...part(redraw(0.05, 0.5))} d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
		</motion.g>
	),
});
