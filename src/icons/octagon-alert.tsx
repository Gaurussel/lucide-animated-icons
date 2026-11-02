import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const brake = pose({ rotate: [0, -20, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const mark = pose(
	{ y: [0, -3, 0], scale: [1, 1.3, 1] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "octagon-alert",
	render: (part) => (
		<motion.g {...part(brake)} style={pivot(12, 12)}>
			<path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
			<motion.g {...part(mark)} style={pivot(12, 16)}>
				<path d="M12 8v4" />
				<path d="M12 16h.01" />
			</motion.g>
		</motion.g>
	),
});
