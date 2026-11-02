import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const shove = pose({ x: [0, -4, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const twist = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.5, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "delete",
	render: (part) => (
		<motion.g {...part(shove)}>
			<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
			<motion.g {...part(twist)} style={pivot(15, 12)}>
				<path d="m12 9 6 6" />
				<path d="m18 9-6 6" />
			</motion.g>
		</motion.g>
	),
});
