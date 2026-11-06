import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const eject = pose(
	{ x: [0, -1.2, 3.6, 0], y: [0, 0.6, -1.8, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const hub = pose({ scale: [1, 0.58, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "disc-2",
	render: (part) => (
		<motion.g {...part(eject)}>
			<circle cx="12" cy="12" r="10" />
			<motion.g {...part(hub)} style={centered}>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 12h.01" />
			</motion.g>
		</motion.g>
	),
});
