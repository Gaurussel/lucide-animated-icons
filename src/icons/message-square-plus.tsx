import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "message-square-plus",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.g {...part(nod)} style={centered}>
				<path d="M12 7v6" />
				<path d="M9 10h6" />
			</motion.g>
		</motion.g>
	),
});
