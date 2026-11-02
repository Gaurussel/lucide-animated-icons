import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const tuck = pose({ y: [0, -5, 0], rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "bookmark-x",
	render: (part) => (
		<motion.g {...part(tuck)} style={pivot(12, 3)}>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
			<motion.g {...part(twist)} style={pivot(12, 10)}>
				<path d="m14.5 7.5-5 5" />
				<path d="m9.5 7.5 5 5" />
			</motion.g>
		</motion.g>
	),
});
