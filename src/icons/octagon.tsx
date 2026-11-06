import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const halt = pose(
	{ x: [0, -1.8, 1.2, 0], rotate: [0, -7.2, 4.8, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.32, 1], ease: ["easeInOut", snap, ring] },
);
const trace = pose({ pathLength: [1, 0.1, 1] }, { duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", snap] });

export default createAnimatedIcon({
	name: "octagon",
	render: (part) => (
		<motion.g {...part(halt)} style={pivot(12, 22)}>
			<motion.path
				{...part(trace)}
				d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
			/>
		</motion.g>
	),
});
