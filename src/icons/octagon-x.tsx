import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const brake = pose({ rotate: [0, -20, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const twist = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "octagon-x",
	render: (part) => (
		<motion.g {...part(brake)} style={pivot(12, 12)}>
			<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
			<motion.g {...part(twist)} style={centered}>
				<path d="m15 9-6 6" />
				<path d="m9 9 6 6" />
			</motion.g>
		</motion.g>
	),
});
