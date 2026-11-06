import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -0.2, 1.07, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.4, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);
const tilt = pose(
	{ rotate: [0, 0, -7.2, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "rectangle-vertical",
	render: (part) => (
		<motion.g {...part(toss)}>
			<motion.g {...part(tilt)} style={centered}>
				<motion.rect {...part(flip)} height="20" rx="2" style={centered} width="12" x="6" y="2" />
			</motion.g>
		</motion.g>
	),
});
