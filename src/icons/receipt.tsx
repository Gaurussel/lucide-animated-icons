import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flutter = pose(
	{ y: [0, -2.4, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "receipt",
	render: (part) => (
		<motion.g {...part(flutter)} style={pivot(12, 22)}>
			<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
			<motion.path {...part(redraw(0.1, 0.45))} d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
			<motion.path {...part(redraw(0.18, 0.45))} d="M12 17.5v-11" />
		</motion.g>
	),
});
