import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const flip = pose(
	{ y: [0, -3, 0], rotate: [0, -14, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "ticket-plus",
	render: (part) => (
		<motion.g {...part(flip)} style={centered}>
			<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
			<motion.g {...part(twist)} style={centered}>
				<path d="M9 12h6" />
				<path d="M12 9v6" />
			</motion.g>
		</motion.g>
	),
});
