import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tuck = pose(
	{ y: [0, -3, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const strike = pose({ scale: [1, 0.89, 1] }, { duration: 0.7, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bookmark-x",
	render: (part) => (
		<motion.g {...part(tuck)} style={pivot(12, 3)}>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
			<motion.g {...part(strike)} style={pivot(12, 10)}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m14.5 7.5-5 5" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m9.5 7.5 5 5" />
			</motion.g>
		</motion.g>
	),
});
