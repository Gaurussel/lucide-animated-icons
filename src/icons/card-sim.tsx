import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const insert = pose(
	{ y: [0, -3, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const chip = pose(
	{ scale: [1, 1, 1.21, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "card-sim",
	render: (part) => (
		<motion.g {...part(insert)} style={centered}>
			<path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
			<motion.g {...part(chip)} style={centered}>
				<path d="M12 14v4" />
				<path d="M8 14h8" />
				<rect height="8" rx="1" width="8" x="8" y="10" />
			</motion.g>
		</motion.g>
	),
});
