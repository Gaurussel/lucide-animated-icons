import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const whirl = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const chase = pose({ pathLength: [1, 0.25, 1] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "loader-circle",
	render: (part) => (
		<motion.g {...part(whirl)} style={centered}>
			<motion.path {...part(chase)} d="M21 12a9 9 0 1 1-6.219-8.56" />
		</motion.g>
	),
});
