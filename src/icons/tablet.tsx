import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, 8, -90, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.38, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const home = pose(
	{ scale: [1, 1, 3, 1] },
	{ duration: 0.6, delay: 0.12, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "tablet",
	render: (part) => (
		<motion.g {...part(turn)} style={centered}>
			<rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
			<motion.line {...part(home)} style={centered} x1="12" x2="12.01" y1="18" y2="18" />
		</motion.g>
	),
});
