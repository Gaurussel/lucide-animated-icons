import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const cut = pose(
	{ pathLength: [1, 0, 1], x: [0, -3, 0], y: [0, 3, 0] },
	{ duration: 0.45, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
);
const rebound = pose(
	{ rotate: [0, 0, 20, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-slash",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.3, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(rebound)} style={pivot(12, 12)}>
				<motion.line {...part(cut)} x1="9" x2="15" y1="15" y2="9" />
			</motion.g>
		</>
	),
});
