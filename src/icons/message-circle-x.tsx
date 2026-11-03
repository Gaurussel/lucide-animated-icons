import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const strike = pose({ scale: [1, 0.82, 1] }, { duration: 0.65, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-circle-x",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(2, 22)}>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.g {...part(strike)} style={centered}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m15 9-6 6" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m9 9 6 6" />
			</motion.g>
		</motion.g>
	),
});
