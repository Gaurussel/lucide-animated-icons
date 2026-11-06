import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const alarm = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "message-circle-warning",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(2, 22)}>
			<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
			<motion.g {...part(alarm)} style={pivot(12, 16)}>
				<path d="M12 8v4" />
				<path d="M12 16h.01" />
			</motion.g>
		</motion.g>
	),
});
