import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const stem = pose({ rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });
const leaf = pose(
	{ rotate: [0, 0, -20, 0], scale: [1, 0.9, 1.1, 1] },
	{ duration: 0.75, delay: 0.06, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "cannabis",
	render: (part) => (
		<motion.g {...part(stem)} style={pivot(12, 22)}>
			<path d="M12 22v-4" />
			<motion.path
				{...part(leaf)}
				d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
				style={pivot(12, 18)}
			/>
		</motion.g>
	),
});
