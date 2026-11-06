import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, springy } from "../helpers.ts";

const flight = pose(
	{ x: [0, -2, 16, -12, 0], scale: [1, 1, 0.7, 0.7, 1], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "send-horizontal",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.g {...part(flight)} style={centered}>
				<path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
				<path d="M6 12h16" />
			</motion.g>
		</motion.g>
	),
});
