import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const bob = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const pendulum = pose(
	{ rotate: [0, 0, 19.2, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.36, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "venus",
	render: (part) => (
		<motion.g {...part(bob)}>
			<motion.g {...part(pendulum)} style={pivot(12, 15)}>
				<path d="M12 15v7" />
				<path d="M9 19h6" />
			</motion.g>
			<circle cx="12" cy="9" r="6" />
		</motion.g>
	),
});
