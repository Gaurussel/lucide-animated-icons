import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const shackle = pose({ y: [0, -5, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const keyhole = pose(
	{ scale: [1, 1, 2, 1] },
	{ duration: 0.65, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "lock-keyhole",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.36, 0.65))} style={edge(0.5, 1)}>
				<rect height="12" rx="2" width="18" x="3" y="10" />
				<motion.circle {...part(keyhole)} cx="12" cy="16" r="1" style={centered} />
			</motion.g>
			<motion.path {...part(shackle)} d="M7 10V7a5 5 0 0 1 10 0v3" />
		</>
	),
});
