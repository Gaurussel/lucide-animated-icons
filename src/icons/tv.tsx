import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const antenna = pose({ rotate: [0, -18, 0] }, { duration: 0.72, times: [0, 0.15, 1], ease: [snap, ring] });
const jump = pose(
	{ y: [0, 0, -1.5, 0], rotate: [0, 0, 3, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "tv",
	render: (part) => (
		<motion.g {...part(jump)} style={pivot(12, 22)}>
			<motion.path {...part(antenna)} d="m17 2-5 5-5-5" style={pivot(12, 7)} />
			<rect height="15" rx="2" width="20" x="2" y="7" />
		</motion.g>
	),
});
