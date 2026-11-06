import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const tilt = pose({ rotate: [0, -18, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });
const dot = pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay: 0.08, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-circle-question-mark",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(2, 22)}>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.path {...part(tilt)} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" style={pivot(12, 13)} />
			<motion.path {...part(dot)} d="M12 17h.01" />
		</motion.g>
	),
});
