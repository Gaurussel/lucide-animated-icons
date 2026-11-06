import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -3, 0.3, 0], rotate: [0, -4.8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const ping = pose(
	{ y: [0, -2.4, 0], scale: [1, 1.3, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "monitor-dot",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
				<motion.circle {...part(ping)} cx="19" cy="6" r="3" style={centered} />
			</motion.g>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M12 17v4" />
				<path d="M8 21h8" />
			</motion.g>
		</>
	),
});
