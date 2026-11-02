import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, 1, -7, 0], scale: [1, 1, 2, 1] },
	{ duration: 0.7, times: [0, 0.1, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const ripple = pose(
	{ scale: [1, 1, 0.88, 1.08, 1] },
	{ duration: 0.75, times: [0, 0.35, 0.45, 0.58, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "circle-dot",
	render: (part) => (
		<>
			<motion.circle {...part(ripple)} cx="12" cy="12" r="10" style={centered} />
			<motion.circle {...part(drop)} cx="12" cy="12" r="1" style={centered} />
		</>
	),
});
