import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, snap, springy } from "../helpers.ts";

const twist = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.6, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "plus",
	render: (part) => (
		<motion.g {...part(hop(0.6))} style={centered}>
			<motion.g {...part(twist)} style={centered}>
				<path d="M5 12h14" />
				<path d="M12 5v14" />
			</motion.g>
		</motion.g>
	),
});
