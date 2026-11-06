import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const fall = pose(
	{ y: [0, -2.4, 0.48, 0] },
	{ duration: 0.65, times: [0, 0.25, 0.4, 1], ease: [snap, "easeIn", springy] },
);
const stem = pose({ rotate: [0, -18, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "apple",
	render: (part) => (
		<motion.g {...part(fall)}>
			<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
			<motion.path {...part(stem)} d="M10 2c1 .5 2 2 2 5" style={pivot(12, 7)} />
		</motion.g>
	),
});
