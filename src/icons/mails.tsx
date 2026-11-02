import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const front = pose(
	{ x: [0, 3, 0], y: [0, -4, 0], rotate: [0, 8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const fold = pose({ scaleY: [1, -0.7, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "mails",
	render: (part) => (
		<>
			<motion.g {...part(front)} style={centered}>
				<rect height="13" rx="2" width="16" x="6" y="4" />
				<motion.path {...part(fold)} d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" style={edge(0.5, 0)} />
			</motion.g>
			<motion.path {...part(jelly(0.28, 0.7))} d="M2 8v11c0 1.1.9 2 2 2h14" style={edge(0, 1)} />
		</>
	),
});
