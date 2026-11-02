import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ x: [0, -1.5, -1.5, 0], y: [0, 1.5, 1.5, 0], rotate: [0, 0, -60, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const glint = pose(
	{ scale: [1, 1, 2, 1] },
	{ duration: 0.75, times: [0, 0.38, 0.48, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "key-round",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(15, 9)}>
			<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
			<motion.circle {...part(glint)} cx="16.5" cy="7.5" fill="currentColor" r=".5" style={centered} />
		</motion.g>
	),
});
