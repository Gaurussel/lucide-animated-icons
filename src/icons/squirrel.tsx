import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, 0.6, -3, 0], rotate: [0, 0, 7.2, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const turn = pose({ scaleX: [1, -0.2, 1] }, { duration: 0.72, times: [0, 0.4, 1], ease: ["easeInOut", springy] });
const blink = pose(
	{ scale: [1, 1, 1.9, 1] },
	{ duration: 0.55, delay: 0.15, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "squirrel",
	render: (part) => (
		<motion.g {...part(leap)} style={pivot(12, 22)}>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="M15.236 22a3 3 0 0 0-2.2-5" />
				<path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
				<motion.path {...part(blink)} d="M18 13h.01" style={centered} />
				<path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
			</motion.g>
		</motion.g>
	),
});
