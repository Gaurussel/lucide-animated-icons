import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const zoom = pose(
	{ scale: [1, 1.3, 1], rotate: [0, -15, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);
const twist = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.1, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "zoom-in",
	render: (part) => (
		<motion.g {...part(zoom)} style={pivot(11, 11)}>
			<circle cx="11" cy="11" r="8" />
			<line x1="21" x2="16.65" y1="21" y2="16.65" />
			<motion.g {...part(twist)} style={pivot(11, 11)}>
				<line x1="11" x2="11" y1="8" y2="14" />
				<line x1="8" x2="14" y1="11" y2="11" />
			</motion.g>
		</motion.g>
	),
});
