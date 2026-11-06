import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0], scale: [1, 1.06, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const alarm = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "message-square-warning",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.g {...part(alarm)} style={pivot(12, 13)}>
				<path d="M12 7v2" />
				<path d="M12 13h.01" />
			</motion.g>
		</motion.g>
	),
});
