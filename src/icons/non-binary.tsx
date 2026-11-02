import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const star = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const bounce = pose({ y: [0, -3, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "non-binary",
	render: (part) => (
		<motion.g {...part(bounce)}>
			<path d="M12 2v10" />
			<motion.g {...part(star)} style={pivot(12, 6)}>
				<path d="m8.5 4 7 4" />
				<path d="m8.5 8 7-4" />
			</motion.g>
			<circle cx="12" cy="17" r="5" />
		</motion.g>
	),
});
