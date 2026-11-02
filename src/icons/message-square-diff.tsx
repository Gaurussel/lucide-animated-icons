import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const twist = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "message-square-diff",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
			<motion.g {...part(twist)} style={centered}>
				<path d="M9 10h6" />
				<path d="M12 7v6" />
			</motion.g>
			<motion.path {...part(redraw(0.2, 0.4))} d="M9 17h6" />
		</motion.g>
	),
});
