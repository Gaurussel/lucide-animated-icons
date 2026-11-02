import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const eject = pose(
	{ x: [0, -2, 6, 0], y: [0, 1, -3, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const hub = pose({ scale: [1, 0.3, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "disc",
	render: (part) => (
		<motion.g {...part(eject)}>
			<circle cx="12" cy="12" r="10" />
			<motion.circle {...part(hub)} cx="12" cy="12" r="2" style={centered} />
		</motion.g>
	),
});
