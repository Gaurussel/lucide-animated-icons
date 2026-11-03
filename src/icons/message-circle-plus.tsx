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
	name: "message-circle-plus",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(2, 22)}>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.g {...part(nod)} style={centered}>
				<path d="M8 12h8" />
				<path d="M12 8v8" />
			</motion.g>
		</motion.g>
	),
});
