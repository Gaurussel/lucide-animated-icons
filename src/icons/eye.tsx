import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const blink = pose(
	{ scaleY: [1, 1, 0.52, 1] },
	{ duration: 0.65, times: [0, 0.55, 0.63, 1], ease: ["easeInOut", "easeInOut", snap] },
);
const look = pose(
	{ x: [0, -2.1, 2.1, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.42, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "eye",
	render: (part) => (
		<motion.g {...part(blink)} style={centered}>
			<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
			<motion.circle {...part(look)} cx="12" cy="12" r="3" />
		</motion.g>
	),
});
