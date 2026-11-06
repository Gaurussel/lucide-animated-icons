import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tuck = pose(
	{ y: [0, -3, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "bookmark-check",
	render: (part) => (
		<motion.g {...part(tuck)} style={pivot(12, 3)}>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
			<motion.path {...part(redraw(0.2, 0.45))} d="m9 10 2 2 4-4" />
		</motion.g>
	),
});
