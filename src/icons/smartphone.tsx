import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -3, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const buzz = pose(
	{ rotate: [0, 0, -16, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const ping = pose(
	{ scale: [1, 1, 3, 1] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "smartphone",
	render: (part) => (
		<motion.g {...part(lift)}>
			<motion.g {...part(buzz)} style={centered}>
				<rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
				<motion.path {...part(ping)} d="M12 18h.01" style={centered} />
			</motion.g>
		</motion.g>
	),
});
