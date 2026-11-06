import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const swingOpen = pose(
	{ y: [0, -1.8, 0], rotate: [0, -16.8, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const keyhole = pose(
	{ scale: [1, 1, 1.6, 1] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "lock-keyhole-open",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.36, 0.7))} style={edge(0.5, 1)}>
				<rect height="12" rx="2" width="18" x="3" y="10" />
				<motion.circle {...part(keyhole)} cx="12" cy="16" r="1" style={centered} />
			</motion.g>
			<motion.path {...part(swingOpen)} d="M7 10V7a5 5 0 0 1 9.33-2.5" style={pivot(7, 10)} />
		</>
	),
});
