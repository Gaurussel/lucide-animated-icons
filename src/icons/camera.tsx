import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const aim = pose(
	{ rotate: [0, -6, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const shutter = pose(
	{ scale: [1, 1, 0.58, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "camera",
	render: (part) => (
		<motion.g {...part(aim)} style={pivot(12, 20)}>
			<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
			<motion.circle {...part(shutter)} cx="12" cy="13" r="3" style={centered} />
		</motion.g>
	),
});
