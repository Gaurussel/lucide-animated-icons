import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const brake = pose(
	{ x: [0, 0, -3, 0], rotate: [0, 0, -24, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);
const bar = pose(
	{ x: [0, 2, -10, 10, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.75, times: [0, 0.12, 0.24, 0.25, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "octagon-minus",
	render: (part) => (
		<motion.g {...part(brake)} style={pivot(12, 12)}>
			<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
			<motion.path {...part(bar)} d="M8 12h8" />
		</motion.g>
	),
});
